//login
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var user = new schema(
     {
      firstName: String,
		lastName: String,
		email: String,
		password: String,
        
     }

);
module.exports=mongoose.model('User',user);