const express = require('express');
const morgan = require('morgan')
const fs = require('fs')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const redisClient = require('redis').createClient()
const handlers = require('./server/handlers')

const app = express();

const limiter = require('express-limiter')(app, redisClient)

// Limit 100 req per ip per hour
// TODO: Test if 100 req per hour are enough, this will be done after all content is made dynamic
// TODO: find if opening a page again counts as multiple requests, this will help with the above TODO 
limiter({
    lookup: ['connection.remoteAddress'],
    total: 100,
    expire: 60 * 60 *1000
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(compression())
app.use(helmet())
app.use(express.csrf())

const logStream = fs.createWriteStream(`${__dirname}/server/.log`, {flags: 'a'})
app.use(morgan('dev', {stream: logStream}))

app.use(cors({
    origin: 'https://api.mlab.com'
}))
const dbURL = process.env.dbURL || 'mongodb://AyushRawal:iiitkota@ds119059.mlab.com:19059/iiitkweb'
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