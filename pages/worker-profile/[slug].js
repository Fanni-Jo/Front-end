import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import pic13 from "../src/img/portfolio/15.svg";
import Comments from "./comments";
// import raneem from "../src/img/Raneem.jpg";
import worker from "../src/img/worker.png";

import { useSpContext } from "../../context/Serviceproviders";

const Profile = () => {
  const [data, setData] = useState([]);
  const [serviceProviders, setServiceProviders] = useSpContext();
  // const pic =
  //   "https://media.discordapp.net/attachments/940214809448812574/994091278222499910/Raneem.jpg";
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
  },[]);
  if(serviceProviders){
  return serviceProviders.map((data,id) => {
    if (data.username == slug) {
      return (
        <>
          <div className="nav-div" key={"nav"+id}>
            <div className="container-fluid  vh-50"  key={"connav"+id}>
              <nav className="navbar " key={"nav2"+id}>
                <h2 className="navbar-username py-5 " key={"h2"+id}>
                  {" "}
                  FullName : {data.first_name + " " + data.last_name}{" "}
                </h2>
              </nav>
            </div>
          </div>
          <div className="img-contain" key={"img-c"+id}>
            <div className="container-fluid" key={"img-cc"+id}>
              <div className="row worker-info" key={"worker-inf"+id}>
                <div className="col-xl-7 " key={"worker-info"+id}>
                  <div className="content" key={"worker-in"+id}>
                    <div className="row worker-info" key={"worker-infoo"+id}>
                      <div className="col-xl-9 img-wrapper" key={"worker-infimg"+id}>
                        <Image
                          className="img-fluid img-profile"
                          // layout="responsive"
                          width="400"
                          height='200'
                          src={data.profile_picture||worker}
                          alt=""
                          key={"worker-img"+id}
                        ></Image>
                      </div>
                    </div>
                    <div className="" key={"worker-rate"+id}>
                      <div className="stars mb-2 ml-5" key={"worker-rates"+id}>
                        <div className="mt-5 d-flex  align-items-center" key={"worker-ratz"+id}>
                          <h5 className="review-stat mr-2 " key={"worker-hrating"+id}>Rating</h5>
                          <div className="small-ratings mb-2" key={"worker-ratzs"+id}>
                            <i className="fa fa-star rating-color" key={"w"+id}></i>
                            <i className="fa fa-star rating-color" key={"w2"+id}></i>
                            <i className="fa fa-star rating-color" key={"w3"+id}></i>
                            <i className="fa fa-star" key={"w4"+id}></i>
                            <i className="fa fa-star" key={"w5"+id}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5" key={"name"+id}>
                  <div className="info" key={"fname"+id}>
                    <h5 key={"fhname"+id}>{data.first_name + " " + data.last_name}</h5>
                    <hr key={"hr1"+id}></hr>

                    <h1 key={"address"+id}>{data.address}</h1>
                    <hr key={"hr2"+id}></hr>

                    <h5 key={"emails"+id}>Email : {data.email}</h5>
                    <div className="sub-info" key={"fivhr3"+id}>
                      <hr key={"hr3"+id}></hr>
                      <h5 key={"exp"+id}>Years of Experience : {data.years_of_exp}</h5>
                      <hr key={"hr3s"+id}></hr>

                      <h4 key={"categ"+id}>Category</h4>
                    </div>
                    <div className="whatsapp" key={"wp"+id}>
                      <div className="row worker-info" key={"workerinfo"+id}>
                        <button className="btn btn-primary btn-whatsapp" key={"wpbutton"+id}>
                          {" "}
                          <i  key={"workeri"+id} className="fab fa-whatsapp mr-3"></i>
                          {data.phone}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Comments slug={slug} key={"comments"+id} />
        </>
      );
    }
  }
  
  )}else{return (
    <div className="nav-div" key={"nav not found"}>
    <div className="container-fluid  vh-50"  key={"connav not found"}>
      <nav className="navbar " key={"nav2"}>
        <h2 className="navbar-username py-5 " key={"No Prfoile Found"}> No Profile Found</h2>
      </nav>
    </div>
    </div>
  )};
};

export default Profile;
