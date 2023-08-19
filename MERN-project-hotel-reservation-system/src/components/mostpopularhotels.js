import hotel1 from './images/hotel1.jpeg'
import hotel2 from './images/hotel2.jpeg'
import hotel3 from './images/hotel3.jpeg'
import hotel4 from './images/hotel4.jpeg'

 
function Mostpopularhotels(){
    return(  
<div>
    {/* most popular hotels */}
<div class="card text-center">
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
  <a href='/hotel'><img src={hotel1} class="card-img-top" alt="hotel1"/></a>
    <div class="card-body">
      <h5 class="card-title">Taj Hotel</h5>
      <p class="card-text">&#8377; 30,000 <br/>
      +&#8377;1.800taxes&fees <br/>
      Per Night <br/>
      No Cost EMI 
      <h6>Login to unlock the best deals</h6></p>
      <a href="/userlogin" class="btn btn-primary"><center>Book It Now!</center></a>
    </div>
  </div>
</div>
<div class="col">
  <div class="card">
  <a href='/hotel'> <img src={hotel2} class="card-img-top" alt="hotel2"/></a>
    <div class="card-body">
      <h5 class="card-title">Radisson Blu</h5>
      <p class="card-text">&#8377; 25,000 <br/>
      +&#8377;1.800taxes&fees <br/>
      Per Night <br/>
      No Cost EMI 
      <h6>Login to unlock the best deals</h6></p>
      <a href="/userlogin" class="btn btn-primary">Book It Now!</a>
    </div>
  </div>
</div>
<div class="col">
  <div class="card">
  <a href='/hotel'> <img src={hotel3} class="card-img-top" alt="hotel3"/></a>
    <div class="card-body">
      <h5 class="card-title">Hyatt</h5>
      <p class="card-text">&#8377; 20,000 <br/>
      +&#8377;1.800taxes&fees <br/>
      Per Night <br/>
      No Cost EMI 
      <h6>Login to unlock the best deals</h6></p>
      <a href="/userlogin" class="btn btn-primary">Book It Now!</a>
    </div>
  </div>
</div>
<div class="col">
  <div class="card">
  <a href='/hotel'><img src={hotel4} class="card-img-top" alt="hotel4"/></a>
    <div class="card-body">
      <h5 class="card-title">The Oberoi Group</h5>
      <p class="card-text">&#8377; 10,000 <br/>
      +&#8377;1.800taxes&fees <br/>
      Per Night <br/>
      No Cost EMI 
      <h6>Login to unlock the best deals</h6>
       </p>
      <a href="/userlogin" class="btn btn-primary">Book It Now!</a>
    </div>
  </div>
</div>
</div>

  
</div>
</div>
</div>

);
}
export default  Mostpopularhotels;