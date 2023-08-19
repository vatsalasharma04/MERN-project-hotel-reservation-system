import React, { useState } from "react";
import './navbar.css'
function NavBar(){
  let [isLoggedIn, setLoggedStatus] = useState(false);
    return(
        <div>

  

  
<header data-bs-theme="dark">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark  ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">BookHotel.Com</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse container  " id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0 centerr marginn center ">
          <li class="nav-item ">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li> 

          <li class="nav-item">
            <a class="nav-link  " aria-current="page" href="/Hotel">Hotels</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/customerreviews">Explore More!</a>
          </li>

          <li class="nav-item">
            <a class="nav-link  " aria-current="page" href="/packages">Packages</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/contact">Contact Us</a>
          </li>
          

        </ul>
        <form >
          <button class="btn btn-outline-success" type="submit" onClick={() => setLoggedStatus(!isLoggedIn)}><a href="/userlogin" style={{textDecoration:"none"}}>Login/SignUp</a></button>
      
        </form>
      </div>
    </div>
  </nav>
</header>
        </div>
        //heading

        
    );
}
export default  NavBar;