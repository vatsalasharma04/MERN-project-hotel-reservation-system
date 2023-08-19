var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var express = require('express');
var router = express.Router();
var User = require('../models/user');

let { encryptPassword, comparePasswords, generateJwt } =
  require('../utils/loginutils');
const user = require('../models/user');    //user


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// User Register API starts here 

router.post('/userregister', async (req, res) => {
  try {

    const UserEmailCheck =
      await User.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();

    // console.log(adminEmailChk);
    if (UserEmailCheck)
      throw new Error('Email already registered');

    req.body.password = await encryptPassword(req.body.password);

    let admin = await new User(req.body).save();
    res.status(200).json({ message: "Users Register Successfully", data: user, success: true });

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

//   User Register API Close


// User Login API Starts Here

router.post('/login', async (req, res) => {
  try {

    const user =
      await User.findOne
        ({
          email: new
            RegExp(`^${req.body.email}$`, 'i')
        }).exec();

  
    if (!user)
      throw new Error("You are not registered");

    const checkPassword = await
      comparePasswords(req.body.password, user.password);

    if (!checkPassword)
      throw new Error("Check Your Credentials");

    const token = await generateJwt(User._id);
    res.json({ message: 'Logged In', data: token, success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})


// User Login Api Ends
//get user list
router.get('/userlist', async (req, res) => {
  try {
      const listuser = await User.find().exec();
      res.json({ message: 'State DetailUser Listing', data: listuser , success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});
//delete user API
router.delete('/deleteuser/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the product by ID and remove it from the database
    const deletedId = await User.findByIdAndRemove(userId).exec();

    if (!deletedUser) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'User not found', success: false });
    }

    res.json({ message: 'User successfully deleted', success: true });
  } catch (err) {
    // Handle any errors during the deletion process
    res.status(500).json({ message: err.message, success: false });
  }
});

module.exports = router;
