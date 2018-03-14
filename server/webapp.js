const express=require('express');
const bodyparser=require('body-parser');
const global_routes=require('./global/global_routes');
const mongoose=require('mongoose');
const webapp=express();
webapp.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/iiit');
webapp.use(bodyparser.json());
global_routes(webapp);
webapp.use((err,req,res,next)=>{
    console.log(res.status(422).send({error:err.message}));
});
module.exports=webapp;