import { useState } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
// import styles from "./styles.module.css";
import "./register.css"
import NavBar from "./navbar";

const UserRegister = () => {
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
			const url = "http://127.0.0.1:4000/user/userregister";
			const { data: res } = await axios.post(url, data);
			navigate("/userlogin");
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
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate  } from 'react-router-dom';


// const Register = () => {
//   const [data, setData] = useState({
//     firstName: "",
// 		lastName: "",
// 		email: "",
// 	password: "",
//   });

//   const navigate = useNavigate(); 

//   const handleChange = ({ currentTarget: input }) => {
// 			setData({ ...data, [input.name]: input.value });
    
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the product data to the backend using Axios POST request
//     axios
//       .post('http://127.0.0.1:4000/admin/register', Register)
//       .then((response) => {
//         console.log('admin Registered successfully:', response.data);

//         // toast.success('Product added successfully!', {
//         //     onClose: () => {
//               // Redirect to the product listing component
//               navigate('/login');
            
//           });

        // You can perform additional actions after successful product addition
      
    //   .catch((error) => {
    //     console.error('Error adding product:', error);
    //     toast.error('Error adding product. Please try again.');
    //   });
//   };

	return (
		// <div className={styles.signup_container}>
		// 	<div className={styles.signup_form_container}>
		// 		<div className={styles.left}>
		// 			<h1>Welcome Back</h1>
		// 			<a href="/login">
		// 				<button type="button" className={styles.white_btn}>
		// 					Sing in
		// 				</button>
		// 			</a>
		// 		</div>
		// 		<div className={styles.right}>
		// 			<form className={styles.form_container} onSubmit={handleSubmit}>
		// 				<h1>Create Account</h1>
		// 				<input
		// 					type="text"
		// 					placeholder="First Name"
		// 					name="firstName"
		// 					onChange={handleChange}
		// 					value={data.firstName}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="text"
		// 					placeholder="Last Name"
		// 					name="lastName"
		// 					onChange={handleChange}
		// 					value={data.lastName}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="email"
		// 					placeholder="Email"
		// 					name="email"
		// 					onChange={handleChange}
		// 					value={data.email}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="password"
		// 					placeholder="Password"
		// 					name="password"
		// 					onChange={handleChange}
		// 					value={data.password}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				{/* {error && <div className={styles.error_msg}>{error}</div>} */}
		// 				<button type="submit" className={styles.green_btn}>
		// 					Sing Up
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>

 <div class="backgroundimg3">	
 <NavBar/>
<body className="regis">
  <div class="container9">
    <form class="register-form" onSubmit={handleSubmit}>
      <h1 style={{fontFamily: 'Times New Roman' }}>REGISTER</h1>
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text"  required
		name="firstName"
		onChange={handleChange}
		value={data.firstName}/>
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text"  required 
		name="lastName"
							onChange={handleChange}
		 					value={data.lastName}/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"  required
		name="email"
						onChange={handleChange}
							value={data.email}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" required
		name="password"
						onChange={handleChange}
		 					value={data.password}/>
      </div>
      <button className= " but" type="submit">Register</button>
    </form>
  </div>
</body>
</div> 

	);
};

export default UserRegister;
