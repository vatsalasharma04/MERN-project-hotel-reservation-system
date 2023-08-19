import sagar from './images/sagar.jpeg'
import vatsala from './images/vatsala.jpeg'
import pulkit from './images/pulkit.jpeg'
import tajmahal from './images/tajmahal.jpeg'
import superi from './images/super.jpg'


import executiveroom from './images/executiveroom.jpeg'
import bussinessroom from './images/bussinessroom.jpeg'
import superiorroom from './images/superiorroom.jpeg'


import hotel1 from './images/hotel1.jpeg'
import hotel2 from './images/hotel2.jpeg'
import hotel3 from './images/hotel3.jpeg'
import hotel4 from './images/hotel4.jpeg'

import head1 from './images/head1.jpeg'
import head2 from './images/head2.jpeg'
import head3 from './images/head3.jpeg'


import'../components/carousel.css';
import Reviews from './reviews'
function Carousel(){
    return(  
      <div>
  <div id="myCarousel" class="carousel slide mb-4" data-bs-ride="carousel" data-bs-theme="light">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="bd-placeholder-img" width="100%" height="100%" src={head1} alt='hotelimage' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Find your next stay</h1>
            <p class="opacity-75">Search low prices on hotels, homes and much more....</p>
            <p><a class="btn btn-lg btn-primary" href="/userregister">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="100%" src={head2} alt='hotelimage' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <div class="container">
          <div class="carousel-caption">
            <h1>The great getaway, your way</h1>
            <p>Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures</p>
            <p><a class="btn btn-lg btn-primary" href="/customerreviews">Find Getaway Deals</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="100%" src={head3} alt='hotelimage' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>Take your longest holiday yet</h1>
            <p>Browse properties offering long-term stays, many at reduced monthly rates.</p>
            <p><a class="btn btn-lg btn-primary" href="/hotel">Find a Stay</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  {/* <h2 class="fw-normal center">Customer Review's</h2> */}
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
   
  
  </div>
</div>


<Reviews/>

<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">
</div>
    </div>
    <div class="col-6">
      <div class="p-3"></div>
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
  </div>
</div>



{/* 
  <!-- Marketing messaging and featurettes
 --> */}
    {/* <!-- START THE FEATURETTES --> */}
    {/* <hr class="featurette-divider"/> */}
    
    <div class="container marketing " >
    <div class="row featurette">
      <div class="col-md-7">

  

        <h2 class="featurette-heading fw-normal lh-1"style={{marginTop:"-0px"}}>Executive Suite <span class="text-body-secondary"></span></h2>
        <p class="lead" >"Indulge in opulence with our Executive Suite Room—an oasis of luxury and comfort. Designed to exceed your expectations, this spacious haven offers a separate living area, lavish amenities, and stunning views. Immerse yourself in elegance and enjoy personalized service that caters to your every need. Elevate your stay with our Executive Suite Room, where indulgence meets sophistication."</p>

      </div>
      <div class="col-md-5">
      {/* <video width="500" height="300" controls >
      <source src='./video/hotelshoot.mp4' type="video/mp4"/>
     </video> */}
      <a href='/hotel'> <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={executiveroom} alt='executiveroomimage' role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/></a> <title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7 order-md-2">

       

        <h2 class="featurette-heading fw-normal lh-1"style={{marginTop:"-0px"}}>Business Class Room <span class="text-body-secondary"></span></h2>
        <p class="lead">"Elevate your stay with our Business Class Room—a harmonious blend of comfort and functionality. Designed for the modern traveler, this room offers a dedicated workspace, high-speed Wi-Fi, and upgraded amenities. Whether you're here for work or relaxation, our Business Class Room ensures a seamless and productive experience. Discover the perfect balance of comfort and convenience in our thoughtfully curated Business Class accommodations."</p>

      </div>
      <div class="col-md-5 order-md-1">
      <a href='/hotel'> <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={bussinessroom} alt='bussinessroom' role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/></a><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
      </div>
    </div>
    <hr class="featurette-divider"/>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1" style={{marginTop:"-0px"}}>Superior Room  <span class="text-body-secondary"></span></h2>
        <p class="lead">"Discover the essence of comfort in our Superior Room—a sanctuary of relaxation and tranquility. Thoughtfully designed with modern furnishings and soothing decor, this room offers a serene retreat after a day of exploration. Unwind in style, enjoy top-notch amenities, and revel in the welcoming ambiance. The Superior Room promises an unforgettable stay that embodies both comfort and charm."</p>

      </div>
      <div class="col-md-5">
      <a href='/hotel'> <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={superiorroom} alt='superiorroom' role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/></a><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
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
   
  
  </div>
</div>
    {/* <hr class="featurette-divider"/> */}
 {/* <!-- Wrap the rest of the page in another container to center all the content. --> */}

    </div>
    </div>
    
);
}
export default  Carousel;