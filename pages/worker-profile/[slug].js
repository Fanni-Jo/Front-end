import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import pic13 from "../src/img/portfolio/15.svg";
import Comments from "./comments";
import raneem from "../src/img/Raneem.jpg";
import worker from "../src/img/worker.png";

import { useSpContext } from "../context/Serviceproviders";

const Profile = () => {
  const [data, setData] = useState([]);
  const [serviceProviders, setServiceProviders] = useSpContext();
  const pic =
    "https://media.discordapp.net/attachments/940214809448812574/994091278222499910/Raneem.jpg";
  const { query } = useRouter();
  const { slug } = query;
  // console.log("slug",slug)

  const GetData = async () => {
    await axios
      .get("https://fanni-jo.herokuapp.com/api/signup/service-provider")
      .then((res) => {
        setData(res.data);
        // console.log("service data", res.data);
      });
    // .catch((e) => {
    //   console.log("service data error", e);
    // });
  };
  useEffect(() => {
    GetData();
  }, []);

  return serviceProviders.map((data) => {
    if (data.username == slug) {
      return (
        <>
          <div className="nav-div">
            <div className="container-fluid  vh-50">
              <nav className="navbar ">
                <h2 className="navbar-username py-5 ">
                  {" "}
                  FullName : {data.first_name + " " + data.last_name}{" "}
                </h2>
              </nav>
            </div>
          </div>
          <div className="img-contain">
            <div className="container-fluid">
              <div className="row worker-info">
                <div className="col-xl-7 ">
                  <div className="content">
                    <div className="row worker-info">
                      <div className="col-xl-9 img-wrapper">
                        <Image
                          className="img-fluid img-profile"
                          width="400"
                          src={worker}
                          alt=""
                        ></Image>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars mb-2 ml-5">
                        <div className="mt-5 d-flex  align-items-center">
                          <h5 className="review-stat mr-2 ">Rating</h5>
                          <div className="small-ratings mb-2">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="info">
                    <h5>{data.first_name + " " + data.last_name}</h5>
                    <hr></hr>

                    <h1>{data.address}</h1>
                    <hr></hr>

                    <h5>Email : {data.email}</h5>
                    <div className="sub-info">
                      <hr></hr>
                      <h5>Years of Experience : {data.years_of_exp}</h5>
                      <hr></hr>

                      <h4>Category</h4>
                    </div>
                    <div className="whatsapp">
                      <div className="row worker-info">
                        <button className="btn btn-primary btn-whatsapp">
                          {" "}
                          <i className="fab fa-whatsapp mr-3"></i>
                          {data.phone}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Comments slug={slug} />
        </>
      );
    }
  });
};

export default Profile;
