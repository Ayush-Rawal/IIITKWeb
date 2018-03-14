const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const EventSchema=new Schema({
    // Events Schema
    name:String,
    link:String,
    startDate:Date,
    endDate:Date
});
const EventModel=mongoose.model('event_info',EventModel);
module.exports=EventModel;
