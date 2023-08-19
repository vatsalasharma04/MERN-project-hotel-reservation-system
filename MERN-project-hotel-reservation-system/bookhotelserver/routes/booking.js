// var express = require('express');
// var router = express.Router();
// var Admin = require('../models/admin');
// var Booking = require('../models/booking');

// let { encryptPassword, comparePasswords, generateJwt } = 
// require('../utils/loginutils');

// router.post('/addbooking', async (req, res) => {
//     try {
//         let booking = await new Booking(req.body).save();
//         res.json({ message: "Booking Added Successfully",
//          data: booking, success: true })
//     }
//     catch (err) {
//         res.json({ message: err.message, success: false })
//     }
//   });
  