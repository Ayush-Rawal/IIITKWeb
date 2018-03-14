const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const FacultySchema=new Schema({
    // Faculty Schema
    name:String,
    contact:Number,
    department:String,
    institute:String,
    post:String,
    status:String,
    yearOfJoining:Number,
    reference:String
});
const FacultyModel=mongoose.model('faculty_info',FacultySchema);
module.exports=FacultyModel;