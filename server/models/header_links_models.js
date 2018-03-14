const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const LinkSchema=new Schema({
    // Header links Schema
            name:String,
            link:String,
            sublink:[{
                        name:String,
                        link:String
            }],
});
const HeaderLinks=mongoose.model('headerlink',LinkSchema);
module.exports=HeaderLinks;