const express = require('express');
const bodyparser = require('body-parser');
const global_routes = require('./server/global/global_routes');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express();

app.Promise = global.Promise;
app.use(bodyparser.json());

// mongoose.connect('mongodb://localhost:27017/iiit');

app.use(express.static(__dirname + '/dist'))

global_routes(app);

app.use((err,req,res,next)=>{
    console.log(res.status(422).send({error:err.message}));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server running on ${process.env.PORT || 8080}`);
});