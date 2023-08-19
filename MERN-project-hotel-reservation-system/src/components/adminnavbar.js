import './navbar.css'
import './userlogin'
import './adminlogin'
import { Link, useNavigate } from "react-router-dom";
const AdminNavBar= () => {
    const navigate = useNavigate();
    const handleLogout = () => {
		localStorage.removeItem("token");
        
		// window.location.reload();
        // window.location = "/userlogin";
        navigate('/adminlogin')
	};
    return(
        <div>

  

  
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark  ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home2">BookHotel.Com</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        
      </button>
      <h5 style={{color:"white", marginTop:"15px"}}><center>WELCOME ADMIN!!</center></h5>
      {/* <ul>
        <li><h5 style={{color:"white", marginTop:"15px"}}><center>WELCOME ADMIN!!</center></h5></li>
      </ul> */}
      {/* <div class="collapse navbar-collapse container " id="navbarCollapse">
        
        <ul class="navbar-nav me-auto mb-2 mb-md-0 centerr marginn">
          <li class="nav-item ">
            <a class="nav-link active" aria-current="page" href="../home2">Home</a>
          </li> 

          <li class="nav-item">
            <a class="nav-link  " aria-current="page" href="../hotel2">Hotels</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="../customer">Explore More!</a>
          </li>

          <li class="nav-item">
            <a class="nav-link  " aria-current="page" href="../packages2">Packages</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="../contact2">Contact Us</a>
          </li> */}
          
{/* <li class="nav-item">
            <a class="nav-link " aria-current="page" href="../adminpanel">AdminPanel</a>
          </li>
        </ul> */}
        <form >
          <button class="btn btn-outline-success" type="submit" onClick={handleLogout}>LOGOUT</button>
        </form>
      </div>
    {/* </div> */}
  </nav>
</header>
        </div>
        //heading

        
    );
}
export default  AdminNavBar;