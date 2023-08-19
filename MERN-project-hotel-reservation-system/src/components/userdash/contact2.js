import { useState } from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import '../contact.css';
import '../footer'
import '../submitcontact'
// import image from './team.jpg'
import '../navbar'
import UserNavBar from '../usernavbar';

  const Contact2 = () => {
    const [contact, setContact] = useState({
      Name: "",
      email: "",
      message: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = ({ currentTarget: input }) => {
      setContact({ ...contact, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://127.0.0.1:4000/admin/contact";
        const { contact: res } = await axios.post(url, contact);
        navigate("/submitcontact2");
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
<div style={{marginTop:"50px", marginBottom:"20px"}}>
  <UserNavBar/>
<h1 className="h1">
    BOOKHOTEL.COM
</h1>
<h5 className="h5"style={{ marginBottom:"20px"}} >
<i>"One Stop For All Your Needs"</i>
</h5>

<div>
{/* <div className="row g-0 text-center" >
  
  <div className='container '>
    <div className="cont">
    <div className="col-sm-6 col-md-9 contact"style={{background: "linear-gradient(135deg, #71b7e6, #9b59b6)", padding:"5px"}}><h2>CONTACT US</h2>
  </div>
  </div>
  </div>
  </div> */}

  {/* paragrapgh */}
  <div className='container'>
{/* <p className='container para'>
    <div className='container'>
Welcome to HotelBook.com, your premier destination for hassle-free hotel reservations worldwide. At HotelBook.com, we pride ourselves on providing top-notch accommodation options that cater to every traveler's needs and preferences. <br>
</br>Whether you're planning a relaxing beach getaway, a romantic city escape, or a business trip, we have a vast selection of hotels to choose from, ensuring a comfortable and memorable stay. <br></br>Our user-friendly website and mobile app make it effortless to browse, compare, and book hotels in just a few clicks. <br></br>For any inquiries or assistance, our dedicated customer support team is available 24/7 to help you with your booking or answer any questions you may have. <br></br>Don't hesitate to reach out to us via email at<strong> contact@hotelbook.com </strong>or call us <strong>toll-free at +1-800-123-4567.</strong> Experience the joy of seamless travel planning with HotelBook.com today!
</div></p> */}
  </div>
{/* Para2 */}
<div className='container' style={{marginBottom:"20px"}}>
    <div className="container">
<h5 className="para2" style={{marginTop:"50px", marginBottom:"20px"}}>
<center><strong>Write to us at contact@hotelbook.com or simply fill this form and we’ll get back to you shortly:</strong></center>
</h5>
    </div>

</div>
</div>
{/* CONTACT FORM */}
{/* <div className='container'>
    <div className="container">
   <div className="fo"> <form action="#" method="post">

  <p>Please take a moment to get in touch, we will get back to you shortly.</p>

  <div class="column">
    <label for="the-name">Your Name</label>
    <input type="text" name="name" id="the-name"/>

    <label for="the-email">Email Address</label>
    <input type="email" name="email" id="the-email"/>

    <label for="the-phone">Phone Number</label>
    <input type="tel" name="phone" id="the-phone"/>

    <label for="the-reason">How can we help you?</label>
    <select name="reason" id="the-reason">
    <option value="">Choose one</option>
    <option value="web">I need web design services</option>
    <option value="video">I need you to produce a video</option>
    <option value="3d">I need 3D polygon things</option>
  </select>
  </div>
  <div class="column">
    <label for="the-message">Message</label>
    <textarea name="message" id="the-message"></textarea>
    <label>
    <input type="checkbox" name="newsletter" value="yes"/> Join our mailing list?
    </label>
    <input type="submit" value="Send Message"/>
  </div>
  
   </form>
   </div>
    </div>
</div> */}
<div className='container'>
<body className='bo'>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>                               
  <div class="container3">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">janakpuri, 110059</div>
          <div class="text-two">new delhi,india</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        {/* <div class="phone details">
          <i class="fas fa-phone"></i>
          <div class="topic">phone</div>
          <div class="text-one">+1800-900-784</div>
          <div class="text-two">+1800-900-584</div>
        </div> */}
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">bookhotel@gmail.com</div>
          <div class="text-two">contact@hotelbook.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p></p>
      <form onSubmit={handleSubmit}>
        <div class="input-box">
          <input type="text" placeholder="Enter your name"
          name="Name"
          onChange={handleChange}
          value={contact.Name}/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"name="email"
		onChange={handleChange}
		value={contact.email}/>
        </div>
        <div class="input-box message-box">
          <textarea placeholder="Enter Your Message"name="message"
		onChange={handleChange}
		value={contact.message}></textarea>
        </div>
        {/* <div class="button">
          <input type="sumbit" value="Send Now" />
        </div> */}
        <button className= " but" type="submit" style={{backgroundColor:"#3e2093"}}>SEND NOW!</button>
      </form>
    </div>
    </div>
  </div>
</body>
</div>







{/* next part after form */}
{/* <div style={{marginTop:"50px"}}>
<div className='container'>
    <div className='container ' >
    <div class="card mb-3">
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><center>OUR TEAM</center></h5>
    <p class="card-text">At BookHotel.com, our team is a dynamic group of passionate individuals committed to creating exceptional travel experiences for our customers. With a diverse range of expertise in the hospitality industry, we work tirelessly to curate an extensive collection of hotels that meet the highest standards of comfort, luxury, and affordability. Each team member brings a unique set of skills and knowledge, which enables us to stay ahead of the curve and continuously improve our services. From customer support to tech development and marketing, we collaborate closely to ensure seamless navigation through our user-friendly platform, making the hotel booking process efficient and enjoyable. Our shared vision is to make every journey a memorable one, and we take pride in offering personalized recommendations and dedicated assistance throughout your travel journey. With BookHotel.com, you can trust that you're in the hands of a skilled and caring team that puts your travel needs first.</p>
    
  </div>
</div>

    </div>
</div>
</div> */}






{/* last div */}
</div>
    )
}
export default Contact2;