import axios from "axios";
import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import pic13 from "../src/img/portfolio/15.svg"
import Comments from "./comments"
import {useSpContext} from "../context/Serviceproviders"


const Profile = () => {
  const [data, setData] = useState([]);
  const [serviceProviders, setServiceProviders] = useSpContext();

  const {query} = useRouter()
  const {slug} = query
  console.log("slug",slug)

const GetData = async () => {
  await axios
    .get("https://fanni-jo.herokuapp.com/api/signup/service-provider")
    .then((res) => {
      setData(res.data);
      console.log("service data", res.data);
    })
    .catch((e) => {
      console.log("service data error", e);
    });
};
useEffect(() => {
  GetData();
}, []);



    return ( 
      serviceProviders.map((data) => {
        if (data.username == slug) {
          // await axios.get()
          return (


<>
        <div className="container">
    <div className="main-body my-2">    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                    <Image src={pic13} alt="Admin" className="rounded-circle" width="150"/>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3 ">
                      <h4>{data.first_name + ' ' + data.last_name}</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">{data.address}</p>
                      {/* <button className="btn btn-primary me-1">Follow</button> */}
                      <button className="btn btn-primary me-1">Message</button>
                      <button className="btn btn-primary me-1">call me {data.phone}</button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* Kenneth Valdez */}
                      {data.f}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* fip@jukmuh.al */}
                      {data.email}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* (239) 816-9029 */}
                      {data.phone}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Gender</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {data.gender}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">job Category</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.category}
                      {/* Pluming */}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* Bay Area, San Francisco, CA */}
                      {data.address}
                    </div>
                  </div>
                </div>
              </div>

    <div class="card-group">

  <div class="card me-1">
    <Image class="card-img-top" src={pic13} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     
    </div>
  </div>
  <div class="card me-1">
    <Image class="card-img-top" src={pic13} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
     
    </div>
  </div>
  <div class="card me-1">
    <Image class="card-img-top" src={pic13} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     
    </div>
    
  </div>
  <div class="card me-1">
    <Image class="card-img-top" src={pic13} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     
    </div>
    
  </div>
  <div class="card me-1">
    <Image class="card-img-top" src={pic13} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     
    </div>
    
  </div>
</div>
            </div>
          </div>
          
                </div>
                </div>
            

            <Comments/>
</>
    );
  }
}
)

)}
        
    



        export default Profile;