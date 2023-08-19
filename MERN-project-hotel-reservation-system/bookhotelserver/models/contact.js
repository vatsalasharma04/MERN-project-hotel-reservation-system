var mongoose = require('mongoose');
var schema = mongoose.Schema
var contact = new schema(
    {
        Name : String,
        email : String,
        message : String
       
    }
);
module.exports=mongoose.model('Contact', contact);
