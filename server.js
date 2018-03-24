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
const cookieParser = require('cookie-parser')
const secret =  process.env.SECRET
const redisClient = require('redis').createClient()
const redisStore = require('connect-redis')(session)
const dbURL = process.env.dbURL
const handlers = require('./server/handlers')

const app = express();

app.use(compression())

app.use(cookieParser(secret))

app.use(session({
    name: 'Hello',
    secret: secret,
    store: new redisStore({
        client: redisClient
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: (process.env.NODE_ENV === 'production')? true : false,
        maxAge: 4 * 60 * 60 * 1000,
    }
}))
app.use(function(req, res, next) {
    if (!req.session) {
        return next(new Error('Connection to redis lost. Check network connection and try again'))
    }
    next()
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(helmet({
    dnsPrefetchControl: {
        allow: true
    },
    hsts: {
        maxAge:31536000,
        preload: true,
        includeSubdomains: true
    },
    // TODO: ADD hpkp configuration after we get certificate hashes

}))

app.use(csrf())
app.use(cors({
    origin: 'https://api.mlab.com'
}))

app.use(favicon(`${__dirname}/dist/favicon.ico`))

const limiter = require('express-limiter')(app, redisClient)
// Limit 100 req per ip per hour
// TODO: Test if 100 req per hour are enough, this will be done after all content is made dynamic
// TODO: find if opening a page again counts as multiple requests, this will help with the above TODO 
// EDIT: ^ does if page sends XHR
limiter({
    lookup: ['connection.remoteAddress'],
    total: 100,
    expire: 60 * 60 *1000
})

app.use(morgan('dev'))

mongoose.connect(dbURL)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB Connected')
});

app.get('/pdf/:folder/:file', (req,res) => {
    res.sendFile(`${__dirname}/src/assets/pdf/${req.params.folder}/${req.params.file}`)
})


app.get('/api/:component', (req, res) => handlers.GETall(req, res, req.params.component))

app.post('/api/:component', (req, res) => handlers.POSTall(req, res, req.params.component))

app.put('/api/:component', (req, res) => handlers.PUTall(req, res, req.params.component))

app.delete('/api/:component', (req, res) => handlers.DELall(req, res, req.params.component))


app.use(express.static(__dirname + '/dist'))

app.get('*', (req,res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`)
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server running on ${process.env.PORT || 8080}`);
});