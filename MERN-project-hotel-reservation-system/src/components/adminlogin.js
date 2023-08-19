import "./adminlogin.css"
import NavBar from "./navbar";
    
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import "./login.css"

const AdminLogin = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/admin/login";
			const { data: res } = await axios.post(url, data);
      const token = res.data; 
			localStorage.setItem("token", token);
			window.location = "/adminpanel";
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
    <NavBar/>
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

     <h2>HELLO ADMIN!!</h2> 

     <div class="form"> 

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

      <div class="links"> 
      {/* <a href="#">Forgot Password</a> */}
       <center><a href="/adminregister">Signup</a></center> 

      </div> 

      <div class="inputBox"> 

       <input type="submit" value="Login"/> 

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
 export default AdminLogin;