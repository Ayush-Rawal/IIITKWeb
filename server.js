const express = require('express');
const morgan = require('morgan')
const fs = require('fs')
const app = express();

const logStream = fs.createWriteStream(`${__dirname}/server/.log`, {flags: 'a'})
app.use(morgan('dev', {stream: logStream}))

app.use(express.static(__dirname + '/dist'))

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server running on ${process.env.PORT || 8080}`);
});