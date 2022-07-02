import Image from "next/image"
import pic13 from "../src/img/portfolio/15.svg"
const Profile = () => {
    return ( 

        <div className="container">
    <div className="main-body my-2">    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                    <Image src={pic13} alt="Admin" className="rounded-circle" width="150"/>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3 ">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      {/* <button className="btn btn-primary me-1">Follow</button> */}
                      <button className="btn btn-primary me-1">Message</button>
                      <button className="btn btn-primary me-1">call me</button>
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
                      Kenneth Valdez
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">job Category</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Pluming
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-13">
              <div className="card mb-3">
                <div className="card-body">
                <div className="row">
                <div className="col-sm-12 text-dark">
                    <h6 className="fw-bold">description</h6>
                        <p>a pro technicahn with alot of experience in the field </p>
                </div>
                </div>
                </div>
                </div>
              </div>

              {/* <div className="col-md-13">
              <div className="card mb-3">
                <div className="card-body">
                <div className="row">
                <div className="col-sm-6 text-dark">
                <h6 className="fw-bold">previous work</h6>
                <div class="card" >
                <div class="card-body">
                <Image class="card-img-top" src={pic13} alt="Card image cap"/>
                
                </div>
                </div>
                <div className="col-sm-6 text-dark">
                <div class="card">
                <div class="card-body">
                <Image class="card-img-top" src={pic13} alt="Card image cap"/>
                </div>
     
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
              </div> */}
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
            
         );
        }

        export default Profile;