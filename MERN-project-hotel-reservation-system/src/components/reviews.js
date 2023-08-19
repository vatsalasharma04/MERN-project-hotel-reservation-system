import sagar from './images/sagar.jpeg'
import vatsala from './images/vatsala.jpeg'
import pulkit from './images/pulkit.jpeg'
function Reviews(){
    return(



<div>
{/* reviews */}
<div class="card-body">
{/* <h2 class="fw-normal center">Customer Review's</h2> */}
  </div>
<div class="container marketing">
  
    {/* <!-- Three columns of text below the carousel --> */}
    <div class="row">
      
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={sagar} alt='sagar' role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title>
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <h2 class="fw-normal">Sagar</h2>
        {/* 5 Star */}
      <div className="star-rating">
        {[...Array(5)].map((star) => {        
          return (         
            <span className="star">&#9733;</span>        
          );
        })}
      </div>

        <p>Booking.Com Made My Trip Very Easy I Got A Nice Stay Which Dosent Make Me Miss My Home.</p>
        <p><a class="btn btn-secondary" href="https://www.instagram.com/sagardrall1804/">Know More &raquo;</a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={vatsala}alt='vatsala'role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <h2 class="fw-normal">Vatsala</h2>
           {/* 5 Star */}
      <div className="star-rating">
        {[...Array(5)].map((star) => {        
          return (         
            <span className="star">&#9733;</span>        
          );
        })}
      </div>
        <p>It took me just 5 mints to plan my trip had a good experience with Book Hotel.com</p>
        <p><a class="btn btn-secondary" href="https://www.instagram.com/vatsalasharma04/">Know More &raquo;</a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={pulkit} alt='pulkit' role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <h2 class="fw-normal">Pulkit</h2>
           {/* 5 Star */}
      <div className="star-rating">
        {[...Array(5)].map((star) => {        
          return (         
            <span className="star">&#9733;</span>        
          );
        })}
      </div>
        <p>Good experience using the site must use if you want to travel without issue.</p>
        <p><a class="btn btn-secondary" href="https://www.instagram.com/pulkit3786/">Know More &raquo;</a></p>
      </div> {/* <!-- /.col-lg-4 --> */}
    </div> {/* <!-- /.row --> */}

</div>
</div>
);
}
export default  Reviews;