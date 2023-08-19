var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotel = new Schema(
    {
        hotelName: String,
        hotelDescription: String,
        price: Number
    }
);
module.exports=mongoose.model('Hotel', hotel);