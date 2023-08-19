var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var Booking = require('../models/booking');
var Hotel = require('../models/hotel');
var Contact =require('../models/contact');

let { encryptPassword, comparePasswords, generateJwt } = 
require('../utils/loginutils');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Admin Register API starts here 

router.post('/register', async (req, res) => {
  try {

    const AdminEmailCheck =
      await Admin.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();

    // console.log(adminEmailChk);
    if (AdminEmailCheck)
      throw new Error('Email already registered');

    req.body.password = await encryptPassword(req.body.password);

    let admin = await new Admin(req.body).save();
    res.status(200).json({ message: "Admin Register Successfully", data: admin, success: true });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'Admin Registered', success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})

//   Admin Register API Close

// Admin Login API Starts Here

router.post('/login', async (req, res) => {
  try {

    const admin =
      await Admin.findOne
        ({
          email: new
            RegExp(`^${req.body.email}$`, 'i')
        }).exec();

  
    // if (!admin)
    //   throw new Error("You are not registered");

    const checkPassword = await
      comparePasswords(req.body.password, admin.password);

    if (!checkPassword)
      throw new Error("Check Your Credentials");

    const token = await generateJwt(Admin._id);
    res.json({ message: 'Logged In', data: token, success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message,  success: false });
    else
      res.json({ message: 'Error',  success: false });
  }
})

// User Login Api Ends
// add booking
router.post('/addbooking', async (req, res) => {
  try {
      let booking = await new Booking(req.body).save();
      res.json({ message: "Booking Added Successfully",
       data: booking, success: true })
  }
  catch (err) {
      res.json({ message: err.message, success: false })
  }
})
//get admin list
//get user list
router.get('/adminlist', async (req, res) => {
  try {
      const listadmin = await Admin.find().exec();
      res.json({ message: 'State Detail Admin Listing', data: listadmin , success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});
//get booking list
router.get('/bookinglist', async (req, res) => {
  try {
      const listbooking = await Booking.find().exec();
      res.json({ message: 'State Detail booking Listing', data: listbooking , success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});
//delete BOOKING API
router.delete('/deletebooking/:id', async (req, res) => {
  try {
    const bookingId = req.params.id;

    // Find the product by ID and remove it from the database
    const deletedId = await Booking.findByIdAndRemove(bookingId).exec();

    if (!deletedBooking) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Booking not found', success: false });
    }

    res.json({ message: 'Booking successfully deleted', success: true });
  } catch (err) {
    // Handle any errors during the deletion process
    res.status(500).json({ message: err.message, success: false });
  }
});

// add hotel api 

router.post('/addhotel', async (req, res) => {
  try {
      let hotel = await new Hotel(req.body).save();
      res.json({ message: "Booking Added Successfully",
       data: hotel, success: true })
  }
  catch (err) {
      res.json({ message: err.message, success: false })
  }
})

//get hotel list
router.get('/hotellist', async (req, res) => {
  try {
      const listhotel = await Hotel.find().exec();
      res.json({ message: 'State Detail Hotel Listing', data: listhotel , success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});



//single user if get information code
router.get('/booking/:id', async (req, res) => {
  try {
    const bookingId = req.params.id;

    // Find the product in the database based on the provided ID
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      // If the product with the given ID is not found, return an error response
      return res.status(404).json({ message: 'Product not found', success: false });
    }

    // If the product is found, return the product details
    res.json({ message: 'Product details fetched successfully', data: booking, success: true });
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: err.message, success: false });
  }
});



// add contactus  api 
router.post('/contact', async (req, res) => {
  try {
      let contact = await new Contact(req.body).save();
      res.json({ message: "Information send Successfully",
       data: contact, success: true })
  }
  catch (err) {
      res.json({ message: err.message, success: false })
  }
})

//get contactus  messages form list
router.get('/contactlist', async (req, res) => {
  try {
      const listcontact = await Contact.find().exec();
      res.json({ message: 'State Detail contact Listing', data: listcontact , success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});
//delete admin API
router.delete('/deleteadmin/:id', async (req, res) => {
  try {
    const adminId = req.params.id;

    // Find the product by ID and remove it from the database
    const deletedId = await Admin.findByIdAndRemove(adminId).exec();

    if (!deletedAdmin) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Admin not found', success: false });
    }

    res.json({ message: 'Admin successfully deleted', success: true });
  } catch (err) {
    // Handle any errors during the deletion process
    res.status(500).json({ message: err.message, success: false });
  }
});
module.exports = router;


