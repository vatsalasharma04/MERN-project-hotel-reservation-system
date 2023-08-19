import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from "./components/navbar";
import Contact from "./components/contact";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Home from "./components/Home";
import Hotel from "./components/Hotel";
import Booking from "./components/booking";
import UserLogin from "./components/userlogin";
import UserRegister from "./components/userregister";
import AdminPanel from "./components/adminpanel";
import AdminLogin from "./components/adminlogin"
import AdminHeader from "./components/authheader/adminheader/adminheader"
import AdminReg from './components/adminregister';
import AdminList from './components/getadmin';
import UserList from './components/getcustomer';
import BookingList from './components/getbooking';
import Carousel from './components/carousel';
import Packages from './components/packages';
import Checkout from './components/checkout';
import Sidebars from './components/sidebars';
import AddHotel from './components/addhotel';
import HotelList from './components/gethotel';
import UserDashboard from './components/userdashboard';
import UserNavBar from './components/usernavbar';
import Contactlist from './components/messages';
//  HEAD
// import HomeNew from './components/homenew'

import Customerreviews from './components/customerreviews';

import'../node_modules/bootstrap/dist/css/bootstrap.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery';
import'../node_modules/bootstrap/dist/js/bootstrap';

import{BrowserRouter as Router, Routes, Route,Link,Navigate} from 'react-router-dom'
import Hotel2 from './components/userdash/hotel2';
import Contact2 from './components/userdash/contact2';
import Home2 from './components/userdash/home2';
import Packages2 from './components/userdash/packages2';
import Submitted from './components/submitted';
import AdminNavBar from './components/adminnavbar';
import SubmitCon from './components/submitcontact';
import SubmitCon2 from './components/userdash/submitcontact2';
import Customer from './components/userdash/customer'
import Mostpopularhotels from './components/mostpopularhotels';
import Reviews from './components/reviews';


const root = ReactDOM.createRoot(document.getElementById('root'));
const adminuser = localStorage.getItem("token");
const renderDestination = () => { if (adminuser) { return <Navigate to="/adminpanel" />; } else { return <AdminLogin />; } }; 
root.render(
  
  <Router>
{/* <NavBar/> */}

{/* <Contact/> */}
 <Routes>
   {/* <Route path="/" element={<App/>}/> */}
   {/* <Route path="/adminheader" element={<AdminHeader/>}/> */}

   <Route path ="/adminheader" element={<AdminHeader subtitle="nav page"/>}/>

   <Route path="/" exact element={<Home/>}/>
   <Route path ="navbar" element={<NavBar subtitle="nav page"/>}/>
   <Route path ="contact" element={<Contact subtitle="contact page"/>}/>
   <Route path ="Sidebars" element={<Sidebars subtitle="Developed by sagar drall"/>}/>
   <Route path ="home2" element={<Home2 subtitle="footer page"/>}/>
   <Route path ="Home" element={<Home subtitle="footer page"/>}/>
   <Route path ="Hotel" element={<Hotel subtitle="hotel page"/>}/>
   <Route path ="hotel2" element={<Hotel2 subtitle="hotel page"/>}/>
   <Route path ="contact2" element={<Contact2 subtitle="hotel page"/>}/>
   <Route path ="booking" element={<Booking subtitle="booking page"/>}/>
   <Route path ="userlogin" element={<UserLogin subtitle="booking page"/>}/>
   <Route path ="userregister" element={<UserRegister subtitle="register page"/>}/>
   {/* <Route path ="register" element={<Register subtitle="register page"/>}/> */}
   <Route path ="adminlogin" element={<AdminLogin subtitle="Admin login page"/>}/>
   <Route path ="adminregister" element={<AdminReg subtitle="Admin register page"/>}/>
   <Route path ="adminpanel" element={<AdminPanel subtitle="Admin panel page"/>}/>
   <Route path ="getcustomer" element={<UserList subtitle="user list page"/>}/>
   <Route path ="getadmin" element={<AdminList subtitle="admin list page"/>}/>
   <Route path ="submitted" element={<Submitted subtitle="admin list page"/>}/>
   <Route path ="getbooking" element={<BookingList subtitle="Booking list page"/>}/>
   {/* <Route path ="homenew" element={<HomeNew subtitle="New Home page"/>}/> */}
   <Route path ="Carousel" element={<userLogin subtitle="Developed by sagar drall"/>}/>
   <Route path ="adminnavbar" element={<AdminNavBar subtitle="Admin navbar"/>}/>

   <Route path ="checkout" element={<Checkout subtitle="Developed by sagar drall"/>}/>
   <Route path ="aboutus" element={<Aboutus subtitle="Developed by sagar drall"/>}/>
   <Route path ="Packages" element={<Packages subtitle="Developed by sagar drall"/>}/>
   <Route path ="packages2" element={<Packages2 subtitle="Developed by sagar drall"/>}/>
   <Route path ="Customerreviews" element={<Customerreviews subtitle="Developed by sagar drall"/>}/>
   <Route path ="footer" element={<Footer subtitle="footer page"/>}/>
   <Route path ="addhotel" element={<AddHotel subtitle="addhotel"/>}/>
   <Route path ="customer" element={<Customer subtitle="Developed by vatsala sharma"/>}/>
   
   <Route path ="gethotel" element={<HotelList subtitle="gethotel"/>}/>
   <Route path ="userdashboard" element={<UserDashboard subtitle="gethotel"/>}/>
   <Route path ="usernavbar" element={<UserNavBar subtitle="gethotel"/>}/>
   <Route path ="submitcontact" element={<SubmitCon subtitle="gethotel"/>}/>
   <Route path ="submitcontact2" element={<SubmitCon2 subtitle="gethotel"/>}/>
   <Route path ="messages" element={<Contactlist subtitle="sagar drall"/>}/>
   <Route path ="mostmopularhotels" element={<Mostpopularhotels subtitle="sagar drall"/>}/>
   <Route path ="reviews" element={<Reviews subtitle="sagar drall"/>}/>
 </Routes>
 <Footer/>
 </Router>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
