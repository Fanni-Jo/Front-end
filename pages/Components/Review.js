import pic13 from "/pages/src/img/portfolio/13.svg"
import Image from "next/image"
import {useRouter} from 'next/router'

const Review = () => {
    const router=useRouter()
    return ( 
        <>
         <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    {/* <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div> */}
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          <p class="lead font-italic mx-4 mx-md-5 text-center">
            "what a site !!! its soooo goood thank alot "
          </p>
          <div class="mt-5 mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              class="rounded-circle rounded mx-auto d-block img-fluid shadow-1-strong" alt="smaple image" width="100"
              height="100" center />
          </div>
          <p class="text-muted text-center mb-0">- john Morian</p>
        </div>

        <div class="carousel-inner">
        
        <div class="carousel-item active">
          <p class="lead font-italic mx-4 mx-md-5 text-center">
            "as always best service at anytime"
          </p>
          <div class="mt-5 mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              class="rounded-circle  rounded mx-auto d-block img-fluid shadow-1-strong" alt="smaple image" width="100"
              height="100" />
          </div>
          <p class="text-center text-muted mb-0">- Anna Morian</p>
        </div>

        <div class="carousel-inner">
        
        <div class="carousel-item active">
          <p class="lead font-italic mx-4 mx-md-5 text-center">
            "the best website in the world"
          </p>
          <div class="mt-5 mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle rounded mx-auto d-block img-fluid shadow-1-strong" alt="smaple image" width="100"
              height="100" />
          </div>
          <p class="text-center text-muted mb-0">- Anna Morian</p>
        </div>

    </div>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon btn-secondary btn-sm" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon btn-secondary btn-sm" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    <button className="btn btn-info mx-auto d-block btn-sm" onClick={()=>{router.push("/ReviewFormWeb")}}> add your review</button>
        </>
     );
}
 
export default Review;