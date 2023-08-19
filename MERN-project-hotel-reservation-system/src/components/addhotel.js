




import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';




  const AddHotel = () => {
    const [hotel, setHotel] = useState({
        hotelName: '',
        hotelDescription: '',
        price: 0
    });
  
    const navigate = useNavigate(); 
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setHotel((prevHotel) => ({
        ...prevHotel,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Send the product data to the backend using Axios POST request
      axios
        .post('http://127.0.0.1:4000/admin/addhotel', hotel)
        .then((response) => {
          console.log('Booking added successfully:', response.data);
          window.location = "/gethotel";
          navigate('/gethotel');
  
          toast.success('Booking added successfully!', {
              onClose: () => {
                // Redirect to the product listing component
                navigate('/gethotel');
              },
            });
  
          // You can perform additional actions after successful product addition
        })
        .catch((error) => {
          console.error('Error adding product:', error);
          toast.error('Error adding product. Please try again.');
        });
    };



  return (
    <div className="container mt-5">

    <div className="container mt-5">
      <h2 className="mb-4">ADD NEW HOTEL </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Hotel Name:</label>
    
          <input
            type="text"
            className="form-control"
            name="hotelName"
            value={hotel.hotelName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hotel Description:</label>
          <input
            type="text"
            className="form-control"
            name="hotelDescription"
            value={hotel.hotelDescription}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={hotel.quantity}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={hotel.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Hotel</button>
      </form>
    </div>
    </div>
  );
};

export default AddHotel;
