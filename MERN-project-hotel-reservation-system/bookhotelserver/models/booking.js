var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var booking = new Schema(
    {
        fname : String,
        email: String,
        checkin: Date,
        checkout: Date,
        guests: Number,
        spreq:String,
        type : String
    }
);
module.exports=mongoose.model('Booking', booking);