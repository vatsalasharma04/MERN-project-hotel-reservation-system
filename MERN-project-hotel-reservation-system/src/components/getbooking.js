import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';


const BookingList = () => {
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the list of users from the API
    axios
      .get('http://127.0.0.1:4000/admin/bookinglist')
      .then((response) => {
        setBooking(response.data.data);
        console.log(response.data,"Res Data")
      })
      .catch((error) => {
        console.error('Error fetching Bookings:', error);
      });
  }, []);

  const handleDelete = (bookingId) => {
    // Delete the  using the API
    axios
      .delete(`http://127.0.0.1:4000/admin/deletebooking/${bookingId}`)
      .then(() => {
        // Filter out the deleted product from the state
        setBooking((prevBooking) =>
          prevBooking.filter((booking) =>  booking._id !== bookingId)
        );

        // Show toast notification for successful deletion
        toast.success('Booking deleted successfully!');
        // history.push('/product-list');
        // navigate('/getbooking');
        window.location = "/getbooking";
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
        toast.error('Error deleting booking. Please try again.');
      });
  };

  return (
    <div className="container mt-5" >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/> 
      <h2 style={{marginTop:"100px"}}>Booking's List</h2>
      <table className="table table-bordered table-striped"style={{marginTop:"50px"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Guests</th>
            <th>Type</th>
            {/* <th>Spl. Req</th> */}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {/* console.log(users,"trfghjkofygu") */}
          {booking.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.fname}</td>
              <td>{booking.email}</td>
              <td>{booking.checkin}</td>
              <td>{booking.checkout}</td>
              <td>{booking.guests}</td>
              <td>{booking.type}</td>
              <td>{booking.edit}</td>
              {/* <td>{user.price}</td> */}
              <td>
                <Link to={`/update/${booking._id}`}>
                  <i  className="me-2 fa fa-edit" />
                </Link></td>
                
                <td>
                 
                 <i className="fa fa-trash text-danger"   style={{ cursor: "pointer" }}onClick={() => handleDelete(booking._id)}>
                  
                  
                  
                  
                  </i>
                  </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;

