import Image from "next/image";
import pic13 from "../src/img/portfolio/15.svg";
import useSWR from "swr";
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
  // console.log("userData", userData);

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

      <section class="wrapper">


        <div class="container-fostrap">
          <div>
            <h1 class="heading">{Categories[iscategory]}</h1>
          </div>

          <div class="content">
            <div class="container">
              <div class="row">


                {category.map((worker, key) => {




                  

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
                            {worker.first_name + " " + worker.last_name}
                          </h4>

                          <p class="">{worker.years_of_exp}</p>
                        </div>
                        <div class="card-read-more">
                          <Link href={`/WorkerProfile/${worker.username}`}>
                            <a
                              href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                              class="btn btn-link btn-block"
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


      </section>

    </>
  );
}

export default workers;
