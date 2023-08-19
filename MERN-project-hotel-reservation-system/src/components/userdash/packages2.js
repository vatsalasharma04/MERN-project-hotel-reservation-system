import manali from '../images/manali.jpeg'
import shimla from '../images/shimla.jpeg'
import mussoorie from '../images/mussoorie.jpeg'
import goa from '../images/goa.jpeg'
import udaipur from '../images/udaipur.jpeg'
import kodaikanal from '../images/kodaikanal.jpeg'
import jaipur from '../images/jaipur.jpeg'
import ooty from '../images/ooty.jpeg'
import rishikesh from '../images/rishikesh.jpeg'
import '../packages.css'
import '../usernavbar'
import UserNavBar from '../usernavbar'
// import NavBar from '../navbar'
function Packages2(){
  return(
   
    <div>
     <UserNavBar/>
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Our Packages</h1>
        <p class="lead text-body-secondary">You can plan your trip with us without any hasel just Choose your destination we have made Packages for your favrouite locations to travel.</p>
        <p>
  
          <a href="#" class="btn btn-primary "style={{textDecoration:"none", color:"white"}}>Explore Packages</a>
          
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={manali} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="manali"/>
        
            <div class="card-body">
              <p class="card-text">"Manali, nestled in the scenic Himalayas, is a paradise for adventure enthusiasts and nature lovers alike. With its snow-capped peaks, lush valleys, this picturesque town offers an unforgettable experience for every traveler."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                <small class="text-body-secondary">Limited offer!</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={shimla} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="shimla"/>
            <div class="card-body">
              <p class="card-text">"Shimla, the 'Queen of Hills,' captivates visitors with its colonial charm and breathtaking landscapes. From the majestic Mall Road to the serene Jakhu Temple, Shimla promises a delightful escape into the lap of nature."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
  
                </div>
                <small class="text-body-secondary">Latest Added!</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={mussoorie} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="mussoorie"/>
            <div class="card-body">
              <p class="card-text">"Mussoorie, the 'Queen of the Hills,' enchants travelers with its misty mountains, lush forests, and cascading waterfalls. Strolling along Camel's Back Road  this hill station offers an idyllic retreat from the bustling city life."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                 
                </div>
                <small class="text-body-secondary">Most Popular!</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={goa} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="goa"/>
            <div class="card-body">
              <p class="card-text">"Goa, the coastal paradise of India, beckons travelers with its golden beaches, vibrant nightlife, and rich Portuguese heritage. Whether you seek relaxation under the palm trees or thrilling water sports, Goa promises an unforgettable holiday experience for all."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                <small class="text-body-secondary">summaer special!</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={udaipur} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="udaipur"/>
            <div class="card-body">
              <p class="card-text">"Udaipur, the 'City of Lakes,' captivates travelers with its romantic ambiance, grand palaces, and shimmering lakes reflecting the splendor of its architecture.Explore the majestic City Palace  Udaipur, offers a truly enchanting experience that transports you to a bygone era of royalty."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
            
                </div>
                <small class="text-body-secondary">Winter special!</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={kodaikanal} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="kodaikanal"/>
            <div class="card-body">
              <p class="card-text">"Kodaikanal, nestled amidst the Western Ghats, enthralls visitors with its misty hills, serene lakes, and lush greenery, earning it the moniker 'Princess of Hill Stations.' meander through the Coaker's Walk, Kodaikanal promises a tranquil and picturesque escape."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                <small class="text-body-secondary">Monsoon lover!</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={jaipur} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="jaipur"/>
            <div class="card-body">
              <p class="card-text">"Jaipur, the 'Pink City' of India, fascinates visitors with its opulent palaces, bustling bazaars, and a colorful tapestry of culture and history. From the majestic Amer Fort to the lively streets of Johari Bazaar, Jaipur offers a captivating blend of tradition and modernity."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                <small class="text-body-secondary">Recent Added</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={ooty} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="ooty"/>
            <div class="card-body">
              <p class="card-text">"Ooty, nestled in the Nilgiri Hills, enchants travelers with its lush tea gardens, picturesque landscapes, and pleasant weather year-round. take a leisurely boat ride on Ooty Lake  this 'Queen of Hill Stations' is a haven for nature enthusiasts and serenity seekers."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                <small class="text-body-secondary">Added last week</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={rishikesh} class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"  alt="rishikesh"/>
            <div class="card-body">
              <p class="card-text">"Rishikesh, the 'Yoga Capital of the World,' allures travelers with its spiritual aura, adrenaline-pumping river rafting, and stunning Ganges riverside setting. Rishikesh offers a unique blend of spirituality and adventure amidst the majestic Himalayas."</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/userlogin"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                <small class="text-body-secondary">couple's Fav</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<footer class="text-body-secondary py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">Love to see you travling your favrouite place safely  </p>
    <p class="mb-0">BookHotel.Com &copy;<a href="/">Visit Homepage</a> or Explore our  <a href="../customerreview/">Customer Reviews</a>.</p>
  </div>
</footer>
<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>


</div>
);
}
export default  Packages2;