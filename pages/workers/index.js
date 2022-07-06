import axios from "axios";
import { useState, useEffect } from "react";
import { useStateContext } from "../context/categoryState"
import Link from "next/link";
import { useSpContext } from "../context/Serviceproviders"



function workers() {
  const [data, setData] = useState([]);
  // const [userData, setUserData] = useState([]);

  const [iscategory, setCategory] = useStateContext();

  const [serviceProviders, setServiceProviders] = useSpContext();
  const pic = 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp'

  const GetData = async () => {
    await axios
      .get("https://fanni-jo.herokuapp.com/api/signup/service-provider")
      .then((res) => {
        setData(res.data);
        setServiceProviders(res.data);
        console.log("data", res.data);
      })
      .catch((e) => {
        console.log("data error", e);
      });
  };
  useEffect(() => {
    GetData();
  }, []);
  console.log("data", data);
  console.log(iscategory)



  const category = []
  data.map((item) => {
    if (item.category == iscategory) {
      category.push(item)

    }

  })
  console.log("category", category);



  console.log("data", data);

  const Categories = {

    "2": "Plumbers",
    "5": "Carpenters",
    "6": "Cleaners",
    "7": "Welders",
    "8": "Farmers",
    "9": "Construction Workers",

  }



  return (

    <>

    
<div
    className="text-center bg-image container-fluid "
    style={{
    backgroundImage: 'url("https://th.bing.com/th/id/R.04502c0947d84cfd6f79474aebb8464d?rik=ExtfKlWbHufsvg&riu=http%3a%2f%2frusselbock.co.uk%2fwp-content%2fuploads%2f2016%2f10%2fimg_1.jpg&ehk=O%2fKXrPa2hwGhIS8%2fTxurDJ%2f137MyB9C9pBPpqGs%2bKHg%3d&risl=&pid=ImgRaw&r=0")',
    backgroundSize: "cover",height:'500px', backgroundPosition: "center", backgroundRepeat: "no-repeat"}}

  >
    <div className="mask pt-2">
      <div className="d-flex justify-content-center align-items-center h-100 mt-5 " style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <div className="text-white btn-lg mb-3">
          <h2 className="">{Categories[iscategory]}</h2>
          {/* <h4 className="mb-3">Subheading</h4> */}
          {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button"
          >Call to action</a
          > */}
        </div>
      </div>
    </div>
  </div>
  {/* Search bar */}
  <div className="workers-container">
  <div className="container cards-worker mt-2">





 {/* Cards */}
  <div style={{
      backgroundImage: 'url("")',
      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>

    <div className="row">
    {category.map((worker, key) => { 
    { return (
      <div className="col-lg-4 col-md-12 col-sm-12 mb-3">

      <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">

      <img src="https://th.bing.com/th/id/OIP.buWaB8mkjjv5EOR0IlheOAHaE8?pid=ImgDet&rs=1" class="img-fluid "/>
  
      <a href="#!" className="ripple">
      <div className="mask"style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}>

      </div>
      </a>
  </div>

  <div className="card-body">
      <h5 className="card-title">Name: {worker.first_name + " " + worker.last_name}</h5>
      <h6 className="card-title">Address: {worker.address}</h6>
      <h6 className="card-title">Experience: {worker.years_of_exp} Years</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link href={`/worker-profile/${worker.username}`}>
      <a href="#!" className="btn btn-primary ">Profile</a>
      </Link>
  </div> 
    </div>
      </div>

) 
 }}
    )}

    </div>


  </div>

  </div>
  </div>



 






















  
     




    



   




      

</>

  );
}

export default workers;



{/* <section className="wrapper">


        <div className="container-fostrap">
          <div>
            <h1 className="heading">{Categories[iscategory]}</h1>
          </div>

          <div className="content">
            <div className="container">
              <div className="row">


                {category.map((worker, key) => {




                  

                  return (
                    <div className="col-xs-12 col-sm-4">
                      <div className="card">
                        <a
                          className="img-card"
                          href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                        >
                          <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                        </a>
                        <div className="col-md-12 text-left mt-2">
                          <div className="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i className="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i className="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i className="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i className="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i className="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                        <div className="card-content">
                          <h4 className="card-title">
                            {" "}
                            
                            {worker.first_name + " " + worker.last_name}
                          </h4>

                          <p className="">Years of Experience: {worker.years_of_exp}</p>
                        </div>
                        <div className="card-read-more">
                          <Link href={`/worker-profile/${worker.username}`}>
                            <a
                              href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                              className="btn btn-link btn-block"
                            >
                              Read More
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>


      </section> */}
