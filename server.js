if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const morgan = require('morgan')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
const favicon = require('serve-favicon')
const helmet = require('helmet')
const csrf = require('csurf')
const session = require('express-session')
const secret =  process.env.SECRET
const redisClient = require('redis').createClient(process.env.REDIS_PORT ,process.env.REDIS_URL)
const redisStore = require('connect-redis')(session)
const handlers = require('./server/handlers')
const logger = require('./server/logger')
const sslify = require('express-sslify')

const app = express();

app.use(compression())

if (process.env.NODE_ENV === 'production') {
    app.use(sslify.HTTPS({
        trustProtoHeader: !!process.env.IS_LOAD_BALANCED
    }))    
}

redisClient.auth(process.env.REDIS_PASS, (err, reply) => {
    if (err) {
        logger.error(`Redis auth error: ${err}`)
    } else {
        logger.info(`Redis connected, reply: ${reply}`)
    }
})

redisClient.on('error', function (err) {
    logger.error(`Redis Error: ${err}`)
})

app.use(session({
    name: 'Yo!',
    secret: secret,
    store: new redisStore({
        client: redisClient
    }),
    resave: false,
    saveUninitialized: false,
    path: '/',
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 4 * 60 * 60 * 1000,
    }
}))
app.use(function(req, res, next) {
    if (!req.session) {
        return next(new Error('Connection to redis lost. Check network connection and try again'))
    }
    next()
})

app.use(bodyparser.json({
    type: ['json', 'application/csp-report']
}));

app.use(helmet({
    dnsPrefetchControl: {
        allow: true
    },
    hsts: {
        maxAge:31536000,
        preload: true,
        includeSubdomains: true
    },
    frameguard: {
        action: 'deny'
    },
    referrerPolicy: {
        policy: 'strict-origin-when-cross-origin'
    }
    // TODO: ADD hpkp configuration after we get certificate hashes

}))

// app.use(csrf())
app.use(cors({
    origin: 'https://api.mlab.com'
}))

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com', 'fonts.googleapis.com', "'unsafe-inline'"
            // TODO: Add style hashes when deploying! 
    ],
        fontSrc: ["'self'", 'fonts.gstatic.com'],
        imgSrc: ["'self'", 'placeimg.com', 'data:'],
        reportUri: 'https://iiitkweb.report-uri.com/r/d/csp/enforce',
        scriptSrc: ["'self'"],
        upgradeInsecureRequests: process.env.NODE_ENV === 'production'
    },
    browserSniff: true,
    reportOnly: process.env.NODE_ENV !== 'production'
}))

app.use(favicon(`${__dirname}/dist/favicon.ico`))

const limiter = require('express-limiter')(app, redisClient)
// Limit 100 req per ip per hour
// TODO: Test if 100 req per hour are enough, this will be done after all content is made dynamic
// TODO: find if opening a page again counts as multiple requests, this will help with the above TODO 
// EDIT: ^ does if page sends XHR
limiter({
    lookup: ['connection.remoteAddress'],
    total: 60,
    expire: 10 * 60 *1000
})

app.use(morgan({ "stream": logger.stream }));

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;
db.on('error', function(err) {
    logger.error(`Mongo error: ${err}`)
});
db.once('open', function() {
    logger.info('Mongo Connected')
});

app.get('/pdf/:folder/:file', (req,res) => {
    res.sendFile(`${__dirname}/src/assets/pdf/${req.params.folder}/${req.params.file}`)
})

app.get('/api/:component', (req, res) => handlers.GETall(req, res, req.params.component))

app.post('/api/:component', (req, res) => handlers.POSTall(req, res, req.params.component))

app.put('/api/:component', (req, res) => handlers.PUTall(req, res, req.params.component))

app.delete('/api/:component', (req, res) => handlers.DELall(req, res, req.params.component))

app.use(express.static(__dirname + '/dist'))
app.get('*', (req, res, next) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`)
})

app.listen(process.env.PORT || 8080, ()=>{
    logger.log(`Server running on ${process.env.PORT || 8080}`);
});