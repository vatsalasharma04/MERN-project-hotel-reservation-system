import '../customerreview.css'
import longroute from '../images/longroutes.jpeg'
import air from '../images/air.jpeg'
import paris from '../images/paris.jpeg'
import aryan from '../images/aryan.jpeg'
import kunal from '../images/kunal.jpeg'
import borwal from '../images/borwal.jpeg'
import manali from '../images/manali.jpeg'
import shimla from '../images/shimla.jpeg'
import Mussoorie from '../images/mussoorie.jpeg'
import sagar from '../images/sagar.jpeg'
import vatsala from '../images/vatsala.jpeg'
import pulkit from '../images/pulkit.jpeg'


import '../usernavbar'
import UserNavBar from '../usernavbar'
function Customer(){
    return(
        <div>
<UserNavBar/>

    

<main>   
     <h2 class="pb-2 border-bottom"></h2>
  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Now Know What They Think!</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div 
        class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        >
          {/* <img src={longroute} class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" />  */}
          <div 
          class="card card-cover d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 longroute"
     >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">LongRoutes,No Worry</h3>
            {/* <img src={longroute}/> */}
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <a href="https://www.instagram.com/sagardrall1804/"><img src={sagar} alt="longroute" width="32" height="32" class="rounded-circle border border-white"/></a>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
       >
            
          <div class="card card-cover d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 air"
          
           >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" >Life Is Short So Travel Today Don't Miss The Chnace!</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <a href="https://www.instagram.com/vatsalasharma04/"><img src={vatsala} alt="longroute" width="32" height="32" class="rounded-circle border border-white"/></a>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                <small>India</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg paris" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Why Just National  Kbi Hoke Aao International!</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <a href="https://www.instagram.com/pulkit3786/"><img src={pulkit} alt="longroute" width="32" height="32" class="rounded-circle border border-white"/></a>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Our Favrouite Customers </h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div 
        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
        <img src={aryan} width="100%" height="100%"/>
            {/* <img src={aryan}/> */}
            {/* <img src={aryan } alt="aryan" width="1em" height="1em"/> */}
          <svg class="bi" width="1em" height="1em"><usei/></svg>
        </div>
        <h3 class="fs-2 text-body-emphasis">Aryan Dabas</h3>
        <p>It was amazing trip really enjoyed must try BookHotel.Com once</p>
        <a href="https://www.instagram.com/aryan.dabas21/" class="icon-link">
          Aryan's Profile
          <svg class="bi"><use href="#chevron-right"/></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <img src={kunal} width="100%" height="100%"/>
          <svg class="bi" width="1em" height="1em"><use href="#people-circle"/></svg>
        </div>
        <h3 class="fs-2 text-body-emphasis">Kunal Dabas</h3>
        <p>Hotel room was same as seen in the picture and food was amazing got discount because of BookHotel.Com</p>
        <a href="https://www.instagram.com/kunal_singh_dabas/" class="icon-link">
        Kunal's Profile
          <svg class="bi"><use href="#chevron-right"/></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <img src={borwal} width="100%" height="100%"/>
          <svg class="bi" width="1em" height="1em"><use href="#toggles2"/></svg>
        </div>
        <h3 class="fs-2 text-body-emphasis"> Saurav Borwal</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="https://www.instagram.com/sauravborwal242/" class="icon-link">
        Saurabh's Profile
          <svg class="bi"><use href="#chevron-right"/></svg>
        </a>
      </div>
    </div>
  </div>






  <div class="b-example-divider"></div>

  <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Mountain Lovers</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <img src={manali} width="100%" height="100%"/>
          <svg class="bi" width="1em" height="1em"><use href="#toggles2"/></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Manali</h3>
          <p>Manali: Alpine paradise nestled in the Himalayas, enchanting with snow-capped peaks, adventure, and serene landscapes, beckoning explorers year-round.</p>
          <a href="/Packages" class="btn btn-primary">
          Book Now!
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <img src={shimla} width="100%" height="100%"/>
          <svg class="bi" width="1em" height="1em"><use href="#cpu-fill"/></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Shimla</h3>
          <p>Shimla: Majestic Himalayan retreat, colonial echoes, and panoramic vistas, offering a blend of history, nature, and captivating experiences.</p>
          <a href="/Packages" class="btn btn-primary">
          Book Now!
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <img src={Mussoorie} width="100%" height="100%"/>
          <svg class="bi" width="1em" height="1em"><use href="#tools"/></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Mussoorie</h3>
          <p>Mussoorie: Nestled in the Himalayas, a haven of misty mountains, cascading waterfalls, and colonial charm, inviting serenity-seekers and adventurers.</p>
          <a href="/Packages" class="btn btn-primary">
            Book Now!
          </a>
        </div>
      </div>
    </div>
  </div>




  <div class="b-example-divider"></div>

  <div class="container px-4 py-5 radissonblu" id="icon-grid">
    <h2 class="pb-2 border-bottom ">Your Fav Hotel's</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#bootstrap"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis " >Radisson Blu</h3>
          <p>We liked everything about that place, location, quality of room, quality of communication with a staff.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#cpu-fill"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Taj Hotel</h3>
          <p>Our stay at People Travel Rooms was absolutely wonderful. The location is perfect, We were also able to leave our luggage in the room during the day after check out. I truly recomend it.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#calendar3"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">The Leela Palace</h3>
          <p>This hotel is close to the train station. The room is quite clean and the host is very nice. I had good experience here!</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#home"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Imperial Hotel</h3>
          <p>Good location, close to the train station. Good sound proof Windows and lovely modern shower room. Clean, and comfy beds</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#speedometer2"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Hyatt Regency</h3>
          <p>We had a lovely stay in this clean and modern hotel - it was close to the train station and near some great bars! Its a bit of a trek to the main square in the centre of Bologna but we didn't mind the walk as there's lots to see on the way!

</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#toggles2"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">The Suryaa</h3>
          <p>Location is alsolutely convenient. Just 1 minute walk to the central railway station. Perfect for those need to move around bt train. Also 15 minutes walk to reach the city centre. Good also for those like to see, eat and shop. The landlord is easy to reach by whatsapp and he is really helpful.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#geo-fill"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">The Connaught Hotel</h3>
          <p>clean and fun view of action outside. VERY close to train station. easy walking distance to bars, shops, and restaurants.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use href="#tools"/></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Shangri La</h3>
          <p>We had a great stay! Althought the appartment is loacated on the noisy street, the room was good isolated. Pietro is really friendly and allowed us to make a late check-out.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider"></div>

  <div class="container px-4 py-5 ">
    <h2 class="pb-2 border-bottom">what we think</h2>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold text-body-emphasis">While Travling We Not Only Explore Place But Ourselves Too!</h2>
        <p class="text-body-secondary">“Perhaps travel cannot prevent bigotry, but by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends.” – Maya Angelou</p>
        <a href="#" class="btn btn-primary btn-lg">Read More!</a>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <a  href="https://www.instagram.com/sagardrall1804/">   <img src={sagar} width="100%" height="100%"/></a>
              <svg class="bi" width="1em" height="1em">
                <use href="#collection" />
              </svg>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">sagar Drall!</h4>
            <p class="text-body-secondary">“I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move..</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
         <a href="https://www.instagram.com/vatsalasharma04/"><img src={vatsala} width="100%" height="100%"/></a>
              <svg class="bi" width="1em" height="1em">
                <use href="#gear-fill" />
              </svg>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Vatsala Sharma!</h4>
            <p class="text-body-secondary">Collect Moments Not Things!</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <a href="https://www.instagram.com/pulkit3786/"><img src={pulkit} width="100%" height="100%"/></a>
              <svg class="bi" width="1em" height="1em">
                <use href="#speedometer" />
              </svg>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Pulkit Dagar!</h4>
            <p class="text-body-secondary">We Travel Not To Escape Life, But For Life Not To Escape Us.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <img src={aryan} width="100%" height="100%"/>
              <svg class="bi" width="1em" height="1em">
                <use href="#table" />
              </svg>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Aryan Dabas!</h4>
            <p class="text-body-secondary">Life IS short AND WORLD IS WIDE!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

        </div>
    );
}
export default  Customer;