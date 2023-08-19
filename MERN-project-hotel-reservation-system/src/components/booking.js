import "./booking.css"
import "./usernavbar"
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import NavBar from "./navbar";
import UserNavBar from "./usernavbar";


const Booking = () => {
  const [booking, setBooking] = useState({
    fname : " ",
    email: "",
    checkin: "",
    checkout: "",
    guests: "",
    spreq:"",
    type : ""
  });

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the product data to the backend using Axios POST request
    axios
      .post('http://127.0.0.1:4000/admin/addbooking', booking)
      .then((response) => {
        console.log('Booking added successfully:', response.data);
        window.location = "/submitted";
        navigate('/submitted');

        toast.success('Booking added successfully!', {
            onClose: () => {
              // Redirect to the product listing component
              navigate('/submitted');
            },
          });

        // You can perform additional actions after successful product addition
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        toast.error('Error adding product. Please try again.');
      });
  };
return(

<div className="container">
<UserNavBar/>

  <div class="container7 yes">
    <h1 style={{fontFamily:"times new roman"}}>Hotel Reservation Form</h1>
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input type="text" id="name"  required
      name="fname"
      value={booking.fname}
      onChange={handleChange}/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required
      
      value={booking.email}
      onChange={handleChange}/>

      <label for="check-in">Check-in Date:</label>
      <input type="date" id="check-in" name="checkin" required
      
      value={booking.checkin}
      onChange={handleChange}/>

      <label for="check-out">Check-out Date:</label>
      <input type="date" id="check-out" name="checkout" required
      
      value={booking.checkout}
      onChange={handleChange}/>

      <label for="guests">Number of Guests:</label>
      <input type="number" id="guests" name="guests" min="1" required
      
      value={booking.guests}
      onChange={handleChange}/>

      <label for="room-type">Room Type:</label>
      <select id="room-type"  required
      name="type"
      value={booking.type}
      onChange={handleChange}>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>

      <label for="special-requests">Special Requests:</label>
      <textarea id="special-requests" name="spreq" rows="4"
     
      value={booking.spre}
      onChange={handleChange}></textarea>

      <button type="submit">Submit Reservation</button>
    </form>
  </div>



</div>
)






};
export default Booking;