import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import "./login.css"
import NavBar from "./navbar";

const UserLogin = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/user/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/userdashboard";
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
  return (
        
<div className="lo backgroundimage">
<NavBar/>
<head>
  <title>Login and Registration Form</title>
</head>
  <div class="form-container">
    <h2 style={{fontFamily: 'Times New Roman'  }} >LOGIN FORM</h2>
    <form onSubmit={handleSubmit}>
      <label for="email">Email:</label>
      <input type="text"  required
       name="email"
        onChange={handleChange}
        value={data.email} />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required
      onChange={handleChange}
        value={data.password} />
      <input type="submit" value="Login"/>
    </form>
    <p>Not registered yet? <a href="/userregister">Register here</a></p>
	<p>Are you Admin? <a href="/adminlogin">Login here</a></p>
  </div>



  </div>


    
  );
}

export default UserLogin;