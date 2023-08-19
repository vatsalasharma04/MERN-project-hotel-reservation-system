import "../Hotel.css"
import UserNavBar from "../usernavbar";
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpg'
import hotel5 from '../images/hotel5.jpg'
import hotel6 from '../images/hotel6.jpg'
import hotel7 from '../images/hotel7.jpg'
import hotel8 from '../images/hotel8.jpeg'
import hotel9 from '../images/hotel9.jpg'
import hotel10 from '../images/hotel10.jpg'
import hotel11 from '../images/hotelin.jpg'
import hotel12 from '../images/hotel12.jpeg'
import hotel13 from '../images/hotel13.jpeg'
import hotel14 from '../images/hotel14.jpg'
import hotel15 from '../images/hotel15.jpg'
import hotel16 from '../images/hotel16.jpg'
import hotel17 from '../images/hotel17.jpg'
import hotel18 from '../images/hotel18.jpeg'
// import hotel9 from './images/hotel9.jpg'
function Hotel2(){
return(
<div>
  <UserNavBar/>
<main>
<section class="py-5 text-center container">
  <div class="row py-lg-5  " >
    {/* <div class="col-lg-6 col-md-8 mx-auto"> */}
      <h1 class="fw-light h11">THE BEST IS HERE </h1>
      <p class="lead text-body-secondary para">Discover unmatched comfort and luxury at hotelbook.com's extensive selection of world-class hotels, catering to every traveler's needs and preferences.

 From charming boutique accommodations to sprawling five-star resorts, hotelbook.com offers a diverse range of hotels that promise unforgettable stays in any destination.

Experience seamless booking and exceptional customer service with hotelbook.com, your one-stop platform for securing the perfect hotel experience for your next adventure..</p>
    
    {/* </div> */}
  </div>
</section>

<div class="album py-5 bg-body-tertiary">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel1} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"><strong><center>TAJ HOTEL</center></strong></text>
          <div class="card-body">
            <p class="card-text">Taj Hotel is a symbol of luxury and heritage, offering unparalleled elegance, and breathtaking architecture around the world.</p>
            <div class="d-flex justify-content-between align-items-center " >
              <div class="btn-group " >
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel2} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"><strong><center>RADDISON BLU</center></strong></text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            {/* <div class="d-flex justify-content-between align-items-center"> */}
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
            
              </div>
            
            {/* </div> */}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel3} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"><strong><center>HYATT CENTRIC</center></strong></text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel4} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"><strong><center>
 The Ritz-Carlton, Paris</center></strong>
</text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel5} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"> <strong><center>Burj Al Arab Jumeirah, Dubai</center></strong>
</text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel6} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"> <strong><center>Four Seasons Hotel, New York City</center></strong>
</text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel7} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
          <strong><center>The Savoy, London</center></strong></text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel8} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
          <strong><center>Aman Tokyo, Tokyo</center></strong>
</text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel9} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
          <strong><center>Waldorf Astoria </center></strong></text>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* yayyyyyy */}
<div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel10} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Beverly Hills, Los Angeles</center></strong>
</text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel11} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>The Plaza Hotel, New York City</center></strong></text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel13} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Raffles Hotel Singapore</center></strong>
</text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel14} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Belmond Hotel Caruso, Ravello</center></strong>
</text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel12} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Taj Lake Palace, Udaipur </center></strong></text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel15} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Hotel de Russie, Rome</center></strong>
</text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel16} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>The St. Regis Bali Resort, Bali</center></strong>
</text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel17} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Mandarin Oriental, Bangkok</center></strong>
</text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={hotel18} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <strong><center>Fairmont Banff Springs, Banff</center></strong></text>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary " ><a href="/booking"style={{textDecoration:"none", color:"white"}}>BOOK IT NOW!!</a> </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</main>
</div>

)
}
export default Hotel2;