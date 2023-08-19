import villa from '../images/villa.jpeg'
import water from '../images/water.jpeg'
import maps from '../images/maps.jpeg'
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpeg'
import '../Home.css'
import Carousel from '../carousel'
import Sidebars from '../sidebars'
import NavBar from '../navbar';
import UserNavBar from '../usernavbar'

function Home2(){
    return(
      
        <div>
          <UserNavBar/>
          




<div >
  <div className="row">
    
    <div className="col-4 center floatcenter bgimage textcolor"> 
    {/* <h4>YOUR PRIVATE GETWAY IN MYKONS</h4> */}
    {/* I'm paragraph. click here to add your own text and edit me. It's .just "Edit Text or double click me to add your own content and makechanges to the font . I'm a great place for you to tell a story and let your users know a little more about you. */}
    </div>
  </div>
</div>

<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">
</div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
    </div>
  </div>
</div>






<Carousel/>
{/* <div class="card text-center">
  <div class="card-header">


  <div class="card-body">
    <h4 class="card-title"> <u>
         Most Popular Hotels
        </u>
         </h4>
  </div>
    <div class="row row-cols-1 row-cols-md-4 g-12">
  <div class="col">
    <div class="card">
      <img src={hotel1} class="card-img-top" alt="hotel1"/>
      <div class="card-body">
        <h5 class="card-title">Taj Hotel</h5>
        <p class="card-text">&#8377; 30,000 <br/>
        +$1.800taxes&fees <br/>
        Per Night <br/>
        No Cost EMI 
        <h6>Login to unlock the best deals</h6></p>
        <a href="./checkout" class="btn btn-primary"><center>Book It Now!</center></a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={hotel2} class="card-img-top" alt="hotel2"/>
      <div class="card-body">
        <h5 class="card-title">Radisson Blu</h5>
        <p class="card-text">&#8377; 25,000 <br/>
        +$1.800taxes&fees <br/>
        Per Night <br/>
        No Cost EMI 
        <h6>Login to unlock the best deals</h6></p>
        <a href="./checkout" class="btn btn-primary">Book It Now!</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={hotel3} class="card-img-top" alt="hotel3"/>
      <div class="card-body">
        <h5 class="card-title">Hyatt</h5>
        <p class="card-text">&#8377; 20,000 <br/>
        +$1.800taxes&fees <br/>
        Per Night <br/>
        No Cost EMI 
        <h6>Login to unlock the best deals</h6></p>
        <a href="./checkout" class="btn btn-primary">Book It Now!</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={hotel4} class="card-img-top" alt="hotel4"/>
      <div class="card-body">
        <h5 class="card-title">The Oberoi Group</h5>
        <p class="card-text">&#8377; 10,000 <br/>
        +$1.800taxes&fees <br/>
        Per Night <br/>
        No Cost EMI 
        <h6>Login to unlock the best deals</h6>
         </p>
        <a href="./checkout" class="btn btn-primary">Book It Now!</a>
      </div>
    </div>
  </div>
</div>

    
  </div>
</div> */}




<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">
</div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
    </div>
  </div>
</div>
{/* our services */}




{/* location */}
    
<div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" >
    <a href="https://goo.gl/maps/Nv7bq8SPKkKxZZvT8"> <img src={maps} className="card-img-top" alt="maps"/></a>
  
</div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.322631719024!2d77.06992533804687!3d28.621059464752438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ba6b064d0f%3A0xf609cdf712fe603e!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1689945555884!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
    <div class="col"style={{padding:"50px"}}>
      <h6>Book Hotel.Com Is located In Janakpuri,<br/>
      The Leading Hotel Booking Compony In India.</h6>
      <p>
        Janakpuri Street No.500 <br/>
        New Delhi-110059/info@BookHotel.Com
      </p>
<h3>ANY QUESTIONS ? <br/>CALL US AT : <br/>
1-800-000-0000</h3>
    </div>
  
  
  </div>
</div>

        </div>
    );
}
export default  Home2;