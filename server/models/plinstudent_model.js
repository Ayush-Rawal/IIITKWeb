const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PlacedSchema=new Schema({
        // placed students schema
        name:String,
        companyname:String,
        package:Number,
});
const PlaceModel=mongoose.model('placedstudent',PlacedSchema);
module.exports=PlaceModel;