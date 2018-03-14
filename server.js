const express = require('express');
const bodyparser = require('body-parser');
const global_routes = require('./server/global/global_routes');
const mongoose = require('mongoose');
const webapp = express();

webapp.Promise = global.Promise;
webapp.use(bodyparser.json());

// mongoose.connect('mongodb://localhost:27017/iiit');

webapp.use(express.static(__dirname + '/dist'))

global_routes(webapp);

webapp.use((err,req,res,next)=>{
    console.log(res.status(422).send({error:err.message}));
});

webapp.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server running on ${process.env.PORT || 8080}`);
});