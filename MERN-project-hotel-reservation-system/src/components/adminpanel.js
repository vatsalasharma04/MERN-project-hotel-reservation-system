import "./adminpanel.css"
import admin from './images/admin.jpg'
import AdminNavBarNavBar from "./adminnavbar";
import AdminNavBar from "./adminnavbar";
function AdminPanel(){
return(

<div>

<AdminNavBar/>

	<body className="adm">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/> 
		<div id="mySidenav" class="sidenav">
		<p class="logo">BookHotel.com</p>
	  {/* <a href="#" class="icon-a"><i class="fa fa-dashboard icons"></i>Dashboard</a> */}
	  {/* <a href="#"class="icon-a"><i class="fa fa-dashboard icons"></i>   Customers</a> */}
      <a href="/getcustomer"class="icon-a"><i class="fa fa-users icons"></i>   Customers</a>
	  <a href="/getadmin"class="icon-a"><i class="fa fa-list icons"></i>  Admins</a>
	  <a href="/getbooking"class="icon-a"><i class="fa fa-shopping-bag icons"></i>  Bookings</a>
	  <a href="/addhotel"class="icon-a"><i class="fa fa-tasks icons"></i> Add Hotels</a>
	  <a href="/gethotel"class="icon-a"><i class="fa fa-user icons"></i>   Hotel List</a>
	  <a href="/messages"class="icon-a"><i class="fa fa-comments"></i>  Messages</a>

	</div>
	<div id="main">

		<div class="head">
			<div class="col-div-6">
	<span style={{fontSize:"30px",cursor:"pointer" , color: "white"}} class="nav"  >☰  Admin Dashboard</span>
	<span style={{fontSize:"30px",cursor:"pointer", color: "white"}} class="nav2"  >☰ Dashboard</span>
	</div>
		
		<div class="col-div-6">
		<div class="profile">

			<img src={admin} class="pro-img" />
			<p>Hello Admin <span></span></p>
		</div>
	</div>
		<div class="clearfix"></div>
	</div>

		<div class="clearfix"></div>
		<br/>
		
		<div class="col-div-3">
			<div class="box">
				<p>11,05,567<br/><span>Customers</span></p>
				<i class="fa fa-users box-icon"></i>
			</div>
		</div>
		<div class="col-div-3">
			<div class="box">
				<p>4388<br/><span>Hotels</span></p>
				<i class="fa fa-building box-icon"></i>
			</div>
		</div>
		<div class="col-div-3">
			<div class="box">
				<p>09,55,789<br/><span>Bookings</span></p>
				<i class="fa fa-shopping-bag box-icon"></i>
			</div>
		</div>
		<div class="col-div-3">
			<div class="box">
				<p>01,20,633<br/><span>Messages</span></p>
				<i class="fa fa-comment box-icon"></i>
			</div>
		</div>
		<div class="clearfix"></div>
		<br/><br/>
		<div class="col-div-8">
			<div class="box-8">
			<div class="content-box">
				<p>Top Selling Hotels</p>
				<br/>
				<table>
	  <tr>
	    <th>Hotel</th>
	    <th>Contact</th>
	    <th>Address</th>
	  </tr>
	  <tr>
	    <td>Taj Hotel</td>
	    <td>+1800 586 452</td>
	    <td>Number One, Mansingh Road, New Delhi, Delhi 110011, India</td>
	  </tr>
	  <tr>
	    <td>The Manali Inn</td>
	    <td>+91 5687955644</td>
	    <td>Rangri, Aleo, Manali, Himachal Pradesh 175131, India</td>
	  </tr>
	  <tr>
	    <td>Burj Al Arab Jumeirah</td>
	    <td>+65 78954 45632</td>
	    <td>umeirah St, Umm Suqeim 3, Dubai, United Arab Emirates</td>
	  </tr>
	  {/* <tr>
	    <td>Island Trading</td>
	    <td>Helen Bennett</td>
	    <td>UK</td>
	  </tr> */}
	  
	  
	</table>
			</div>
		</div>
		</div>

		<div class="col-div-4">
			<div class="box-4">
			<div class="content-box">
				<p>Total Sale <span>Sell All</span></p>

				<div class="circle-wrap">
	    <div class="circle">
	      <div class="mask full">
	        <div class="fill"></div>
	      </div>
	      <div class="mask half">
	        <div class="fill"></div>
	      </div>
	      <div class="inside-circle"> 70% </div>
	    </div>
	  </div>
			</div>
		</div>
		</div>
			
		<div class="clearfix"></div>
	</div>


	{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
	<script>

	

	</script>

	</body>


	

 </div>   

)




};
export default AdminPanel;