import './userdashboard.css'
import user from './images/user.png'
import hotel1 from './images/hotel.jpg';
import hotel2 from './images/hotel2.jpeg';
import hotel3 from './images/hotel3.jpeg';
import hotel4 from './images/hotel4.jpeg';
import './usernavbar'
import UserNavBar from './usernavbar';
function UserDashboard(){
    return(
       <div className="top1"> 
       <UserNavBar/>
<body class="userd">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>                               
  <div class="container6">
    {/* <nav className='nav6'>
      <ul className='a6'>
        <li ><a href="#" class="logo6">
          <img src={user}/>
          <span class="nav6-item">USER</span>
        </a></li>
        <li><a href="#" >
          <i class="fas fa-menorah"></i>
          <span class="nav6-item">Profile</span>
        </a></li>
        <li><a href="/home" >
          <i class="fas fa-home"></i>
          <span class="nav6-item">Special Offers</span>
        </a></li>
        <li><a href="#" >
          <i class="fas fa-building"></i>
          <span class="nav6-item"> Customer Review</span>
        </a></li>
        <li><a href="#" >
          <i class="fas fa-plane"></i>
          <span class="nav6-item"></span>
        </a></li>
        <li><a href="#" >
          <i class="fas fa-comments "></i>
          <span class="nav6-item">Fav Destinations</span>
        </a></li>
        

        <li><a href="#" class="logout ">
          <i class="fas fa-sign-out-alt"></i>
          <span class="nav6-item"></span>
        </a></li>
      </ul>
    </nav> */}


    <section class="main1">
      <div class="main-top">
        <h1>BookHotel.com</h1>
        <h3>OUR MOST POPULAR HOTELS</h3>
        <i class="fas fa-user-cog"></i>
      </div>
      <div class="users">
        <div class="card1">
          <img src={hotel1}/>
          <h3>TAJ HOTEL</h3>
          {/* <p>Ui designer</p> */}
          <div class="per">
            <table>
              
            </table>
          </div>
          <a href='/booking'><button>BOOK</button></a>
        </div>
        <div class="card1">
          <img src={hotel2}/>
          <h3>HYATT CENTRIC</h3>
          {/* <p>Progammer</p> */}
          <div class="per">
            <table>
              {/* <tr>
                <td><span>82%</span></td>
                <td><span>85%</span></td>
              </tr> */}
              {/* <tr>
                <td>Month</td>
                <td>Year</td>
              </tr> */}
            </table>
          </div>
          <a href='/booking'><button>BOOK</button></a>
        </div>
        <div class="card1">
          <img src={hotel3}/>
          <h3>RADDISON BLU</h3>
          {/* <p>tester</p> */}
          <div class="per">
            <table>
              {/* <tr>
                <td><span>94%</span></td>
                <td><span>92%</span></td>
              </tr> */}
              {/* <tr>
                <td>Month</td>
                <td>Year</td>
              </tr> */}
            </table>
          </div>
         <a href='/booking'><button>BOOK</button></a>
        </div>
        <div class="card1">
          <img src={hotel4}/>
          <h3>THE ASHOKA GROUP</h3>
          {/* <p>Ui designer</p> */}
          <div class="per">
            <table>
              {/* <tr>
                <td><span>85%</span></td>
                <td><span>82%</span></td>
              </tr> */}
              {/* <tr>
                <td>Month</td>
                <td>Year</td>
              </tr> */}
            </table>
          </div>
          <a href='/booking'><button>BOOK</button></a>
        </div>
      </div>

      <section class="attendance">
        <div class="attendance-list">
          <h1>Your Bookings </h1>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Loaction Name</th>
                <th>Hotel Name</th>
                <th>Date</th>
                <th>Join Time</th>
                <th>Logout Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Kedarnath</td>
                <td>Home Stay</td>
                <td>03-12-23</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr class="active">
                <td>02</td>
                <td>Shimla</td>
                <td>RADDISON Blu Shimla</td>
                <td>05-11-23</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>03</td>
                <td>Goa</td>
                <td>Taj Hotel Goa</td>
                <td>04-10-23</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>04</td>
                <td>Manali</td>
                <td>The Old Town Manali</td>
                <td>03-09-23</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>

</body>
</div>

    )
}
export default UserDashboard;