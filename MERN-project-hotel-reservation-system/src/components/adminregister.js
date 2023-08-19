import { useState } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
// import styles from "./styles.module.css";
import "./adminlogin.css"

const AdminReg = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://127.0.0.1:4000/admin/register";
			const { data: res } = await axios.post(url, data);
			navigate("/adminlogin");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return(
        <form onSubmit={handleSubmit}>
        <div className="ad">
        <body className= "admin"> 
      
        <section class="section3"> 
        <span>
        </span>
         <span>
         </span> 
         <span>
         </span> 
         <span></span>
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span>
           <span></span>
            <span></span> 
            <span></span>
             <span></span>
              <span></span>
               <span></span>
                <span></span>
                 <span></span>
                  <span></span>
                   <span></span>
                    <span></span>
                     <span></span> 
                     <span></span> 
                     <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
      
         <div class="signin"> 
      
          <div class="content8"> 
      
           <h2>HELLO NEW ADMIN!!</h2> 
      
           <div class="form"> 
      
            <div class="inputBox"> 
      
             <input type="text" required
             name="firstName"
             onChange={handleChange}
             value={data.firstName}/> <i> First Name</i> 
      
            </div> 
            <div class="inputBox"> 
      
             <input type="text" required
             name="lastName"
             onChange={handleChange}
              value={data.lastName}/> <i> Last Name</i> 
      
            </div> 
      
            
            <div class="inputBox"> 
      
             <input type="email" required
             name="email"
             onChange={handleChange}
                 value={data.email}/> <i>Email</i> 
      
            </div> 
            <div class="inputBox"> 
      
             <input type="password" required
             name="password"
             onChange={handleChange}
                  value={data.password}/> <i>Password</i> 
      
            </div> 
      
            {/* <div class="links"> 
            
             <center><a href="#">Signup</a></center> 
      
            </div>  */}
      
            <div class="inputBox"> 
      
             <input type="submit" value="Register"/> 
      
            </div> 
      
           </div> 
      
          </div> 
      
         </div> 
      
        </section> 
        </body>
        </div>
        </form>
        )
    };
     export default AdminReg;