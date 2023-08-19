import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
// import AdminList from "getadmin";


const AdminList = () => {
  const [admin, setAdmin] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the list of users from the API
    axios
      .get('http://127.0.0.1:4000/admin/adminlist')
      .then((response) => {
        setAdmin(response.data.data);
        console.log(response.data,"Res Data")
      })
      .catch((error) => {
        console.error('Error fetching admin:', error);
      });
  }, []);

  const handleDelete = (adminId) => {
    // Delete the  using the API
    axios
      .delete(`http://127.0.0.1:4000/admin/deleteadmin/${adminId}`)
      .then(() => {
        // Filter out the deleted product from the state
        setAdmin((prevAdmin) =>
          prevAdmin.filter((user) =>  user._id !== adminId)
        );

        // Show toast notification for successful deletion
        toast.success('Admin deleted successfully!');
        // history.push('/product-list');
        navigate('/admindashboard');
      })
      .catch((error) => {
        console.error('Error deleting adimin:', error);
        toast.error('Error deleting admin. Please try again.');
      });
  };

  return (
    <div className="container mt-5" >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/> 
      <h2 style={{marginTop:"100px"}}>Admin's List</h2>
      <table className="table table-bordered table-striped"style={{marginTop:"50px"}}>
        <thead>
          <tr>
            {/* <th>First Name</th> */}
            {/* <th>Last Name</th> */}
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {/* console.log(users,"trfghjkofygu") */}
          {admin.map((admin) => (
            <tr key={admin._id}>
              {/* <td>{admin.firstName}</td> */}
              {/* <td>{admin.lastName}</td> */}
              <td>{admin.email}</td>
              {/* <td>{user.price}</td> */}
              <td>
                <Link to={`/update/${admin._id}`}>
                  <i  className="me-2 fa fa-edit" />
                </Link></td>
                <td>
                 
                 <i className="fa fa-trash text-danger"   style={{ cursor: "pointer" }}onClick={() => handleDelete(admin._id)}>
                  
                  
                  
                  
                  </i>
                  </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;

