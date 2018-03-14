const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const GlobalSchema=new Schema({
    // about,mission,vision  Schema
    name:String,
    content:String,
});
const Global=mongoose.model('global',GlobalSchema);
module.exports=Global;