import Image from "next/image";
import pic13 from "../src/img/portfolio/15.svg";
import useSWR from "swr";
import axios from "axios";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/Theme"

// async function axiosFunc(url) {
//   const response = await fetch(url);

//   return data.json();
// }

function workers() {
  const [data, setData] = useState([]);
  const [iscategory, setCategory] = useThemeContext();

  // const workersHandler = async (e) => {
  //     e.preventDefault();
  //     const formData = {
  //       username:  e.target.username.value,
  //       password:  e.target.password.value,
  //     };

  const GetData = async () => {
    await axios
      .get("https://fanni-jo.herokuapp.com/api/signup/service-provider")
      .then((res) => {
        setData(res.data);
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
  // const url = 'https://fanni-jo.herokuapp.com/api/signup/client'
  // const { data, error } = useSWR(url, axiosFunc);
  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
    const category = []
    data.map((item)=>{
    if (item.category == iscategory){
        category.push(item)
    }

    
  })
    console.log("category", category);



  

  return (
    // {data.map((item,index)=>{
    //     return(
    //         <div class="row">
    //             <div class="col-md-4">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <h5 class="card-title">{item.username.data}</h5>
    //                         <p class="card-text">{item.description}</p>
    //                         <a href="#" class="btn btn-primary">See Profile</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    // )}

    <>

          <section class="wrapper">
        

            <div class="container-fostrap">
              <div>
                <h1 class="heading">Service Providers</h1>
              </div>

              <div class="content">
                <div class="container">
                  <div class="row">


                  {category.map((data, key) => {
    return (
                    <div class="col-xs-12 col-sm-4">
                      <div class="card">
                        <a
                          class="img-card"
                          href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                        >
                          <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                        </a>
                        <div class="col-md-12 text-left mt-2">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                        <div class="card-content">
                          <h4 class="card-title">
                              {" "}
                               {data.username}
                          </h4>
                 
                          <p class="">{data.category}</p>
                        </div>
                        <div class="card-read-more">
                          <a
                            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                            class="btn btn-link btn-block"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    );
})}
                  </div>
                </div>
              </div>
            </div>
                    

          </section>

    </>
  );
}

export default workers;
