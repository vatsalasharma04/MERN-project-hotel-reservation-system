var mongoose = require('mongoose');
var schema = mongoose.Schema
var user = new schema(
    {
        firstname : String,
        lastname : String,
        email : String,
        phone : Number,
        password : String
    }
);
module.exports=mongoose.model('Admin', user);
