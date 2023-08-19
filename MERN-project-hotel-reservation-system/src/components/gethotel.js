import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';


const HotelList = () => {
  const [hotel, setHotel] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the list of hotel from the API
    axios
      .get('http://127.0.0.1:4000/admin/hotellist')
      .then((response) => {
        setHotel(response.data.data);
        console.log(response.data,"Res Data")
      })
      .catch((error) => {
        console.error('Error fetching hotel:', error);
      });
  }, []);

//   const handleDelete = (userId) => {
//     // Delete the  using the API
//     axios
//       .delete(`http://127.0.0.1:4000/user/deleteuser/${userId}`)
//       .then(() => {
//         // Filter out the deleted product from the state
//         setUser((prevUser) =>
//           prevUser.filter((user) =>  user._id !== userId)
//         );

//         // Show toast notification for successful deletion
//         toast.success('User deleted successfully!');
//         // history.push('/product-list');
//         navigate('/userlist');
//       })
//       .catch((error) => {
//         console.error('Error deleting user:', error);
//         toast.error('Error deleting user. Please try again.');
//       });
//   };

  return (
    <div className="container mt-5" >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/> 
      <h2 style={{marginTop:"100px"}}>Hotel's List</h2>
      <table className="table table-bordered table-striped"style={{marginTop:"50px"}}>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Hotel Description</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {/* console.log(users,"trfghjkofygu") */}
          {hotel.map((hotel) => (
            <tr key={hotel._id}>
              <td>{hotel.hotelName}</td>
              <td>{hotel.hotelDescription}</td>
              <td>{hotel.price}</td>
              {/* <td>{user.price}</td> */}
              <td>
                <Link to={`/update/${hotel._id}`}>
                  <i  className="me-2 fa fa-edit" />
                </Link></td>
                
                <td>
                 
                 <i className="fa fa-trash text-danger"   style={{ cursor: "pointer" }}>
                  
                  
                  
                  
                  </i>
                  </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelList;

