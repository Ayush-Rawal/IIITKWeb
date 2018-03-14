const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const LatSchema=new Schema({
    // Latest News,Quick Links schema
            name:String,
            subpart:[{
                        name:String,
                        link:String,
                        dateofadding:Date
            }],
});
const LatLinks=mongoose.model('latlink',LatSchema);
module.exports=LatLinks;