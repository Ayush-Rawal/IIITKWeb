const express = require('express');
const morgan = require('morgan')
const fs = require('fs')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

const logStream = fs.createWriteStream(`${__dirname}/server/.log`, {flags: 'a'})
app.use(morgan('dev', {stream: logStream}))

const dbURL = process.env.dbURL || 'mongodb://AyushRawal:iiitkota@ds119059.mlab.com:19059/iiitkweb'
mongoose.connect(dbURL)
const db = mongoose.connection;

app.get('/pdf/:folder/:file', (req,res) => {
    res.sendFile(`${__dirname}/src/assets/pdf/${req.params.folder}/${req.params.file}`)
})

app.use(express.static(__dirname + '/dist'))

app.get('*', (req,res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`)
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server running on ${process.env.PORT || 8080}`);
});