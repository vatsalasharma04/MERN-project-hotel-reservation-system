// import { Default } from "react-toastify/dist/utils"
import './submitted.css'

function SubmitCon (){
    return(

<div className="sub">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>  

        <div class="thankyou-page">
    <div class="_header">
        <div class="logo7">
            <img src="https://codexcourier.com/images/banner-logo.png" alt=""/>
        </div>
        
        
        <h1>Thank You! &#10003;</h1>
    </div>
    <div class="_body">
        <div class="_box">
            <h2>
                <strong><center>YOUR MESSAGE HAS REACHED US!!</center> </strong> 
            </h2>
            <h4>
            <center>WE WILL CONTACT YOU SOON!! </center> 
            </h4>
        </div>
    </div>
    <div class="_footer">
        {/* <p style={{marginBottom:"50px"}}>Having trouble? <a href="">Contact us</a> </p> */}
        <a class="btn7" href="/Home">Back to homepage</a>
    </div>
</div>
{/* last */}
</div>
    )
}
export default  SubmitCon;