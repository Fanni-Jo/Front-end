import pic13 from "/pages/src/img/portfolio/13.svg"
import Image from "next/image"
import {useRouter} from 'next/router'
import girlreview from '../src/img/reviewAvater.webp'
import vin from '../src/img/vin.png'

const Review = () => {
    const router=useRouter()
    return ( 
        <>
        
         <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    {/* <div className="carousel-inner">
      <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div> */}
      <div className="carousel slide">
      <div className="carousel-inner align-items-center">
        
        <div className="carousel-item  text-center" >
          <p className="lead font-italic mx-4 mx-md-5 ">
          &quot;what a site !!! its soooo goood thank alot&quot;
          </p>
          
            
            <Image src={vin}
              className="rounded-circle rounded mx-auto d-block img-fluid shadow-1-strong" alt="smaple image" width="100"
              height="100"  ></Image>
          
          <p className="text-muted  mb-0">- john Morian</p>
        </div>
        
        
        <div className="carousel-item  text-center">
          <p className="lead font-italic mx-4 mx-md-5">
          &quot;always best service at anytime&quot;
          </p>
            <Image src={girlreview}
              className="rounded-circle  rounded mx-auto d-block img-fluid shadow-1-strong" alt="smaple image" width="100"
              height="100" ></Image>
          <p className="text-center text-muted mb-0">- Anna Morian</p>
        </div>
       
        <div className="carousel-item active text-center">
          <p className="lead font-italic mx-4 mx-md-5 ">
          &quot;the best website in the world&quot;
          </p>
          <Image src={vin}
              className="rounded-circle rounded mx-auto d-block img-fluid shadow-1-strong text-center" alt="smaple image" width="100"
              height="100" ></Image>
              
          <p className="text-center text-muted mb-0">- Vin Morgan</p>
        </div>
        </div>
        </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon btn-secondary btn-sm" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon btn-secondary btn-sm" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    <button className="btn btn-info mx-auto d-block btn-sm" onClick={()=>{router.push("/review-form-web")}}> add your review</button>
        </>
     );
}
 
export default Review;