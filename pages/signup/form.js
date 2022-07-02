import {useState} from 'react'


export default function Form() {
  // const [file, setFile] = useState([]);
  // function handleChange(e) {
  //     console.log(e.target.files[0].name);
  //     setFile(...file,URL.createObjectURL(e.target.files[0]));
      


  // }
  // console.log(file)
  
  return (
    <>
    <div className=" signup">
    <div className="container register-container ">
      <div className="row ">
        <div className="col-md-6 offset-md-3 borderform">
          <div className="signup-form">
            <form className="mt-5 ">
              <div className="row">
              <h3 className="text-center " >Registration Form</h3>

              <div className="mb-3 col-md-6 col-sm-12 col-lg-6">
                  <label className="form-label text-light"  for="form6Example1">First name</label>
                  <input type="text" id="form6Example1" className="form-control" placeholder="Jack" required/>
              </div>

              <div className="mb-3 col-md-6 col-sm-12 col-lg-6">
                  <label className="form-label   text-light" for="form6Example2">Last name</label>
                  <input type="text" id="form6Example2" className="form-control" placeholder="Nir" required/>
              </div>

              <div className="col-md-12  col-sm-12  mb-3">
                <label className="form-label  text-light" for="form6Example3">Username</label>
                <input type="text" id="form6Example3" className="form-control" placeholder="JohnWick" required/>
              </div>

              <div className="col-md-12 col-sm-12  mb-3">
                <label className="form-label  text-light" for="form6Example5">E-Mail Address</label>
                <input type="email" id="form6Example5" className="form-control" placeholder="john13@gmail.com" required/>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label  text-light" for="form6Example3">Password</label>
                <input type="text" id="form6Example3" className="form-control " placeholder="Enter your password" required/>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label  text-light text-fixed" for="form6Example3">Confirm Password</label>
                <input type="text" id="form6Example3" className="form-control " placeholder="Re-enter your password" required/>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3  ">
              <label className="form-label mr-3 text-light " for="form6Example6">Service Categories</label>
                <select id="services" name="services" className="p-2 dropdown " required>
                  <option className = "option" value="plumbing">Plumbing</option>
                  <option className = "option" value="carpinting">Carpinting</option>
                  <option className = "option" value="cleaning">Cleaning</option>
                  <option className = "option" value="welding">Welding</option>
                  <option className = "option" value="agriculturing">Agriculturing</option>
                  <option className = "option" value="building and construction">Building and Construction</option>
                </select>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example6">Years of Experience</label>
                <input type="number" min = "0" id="form6Example6" className="form-control" placeholder="Example: 1" required/>
              </div>


              <div className="col-md-6 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example3">Phone Number</label>
                <input type="text" id="form6Example3" className="form-control" placeholder="+962" required/>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example4">City</label>
                <input type="text" id="form6Example4" className="form-control " placeholder="Amman" required/>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example7">Image</label>
                <input type="file" id="imageFile" name="files" accept="image/*" className="text-light" list multiple />
              <div id="display-image"></div>
              </div>

{/*       
              <script type="text/javascript">

                function GetImage(image) {
                  $("#display-image").html(image)
                  }

              </script> */}
              

  
 

  
   
              <div className="col-xs-12 col-sm-12  col-md-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example7">Gender</label>
                <select id="gender" name="gender" className="p-2 dropdown " required>
                  <option className = "option" value="plumbing">Male</option>
                  <option className = "option" value="carpinting">Female</option>
                  </select>
              </div>


              {/* <div className="col-md-12 col-sm-12 mb-3">
                <label className="form-label text-light" for="form6Example7">Additional Information</label>
                <textarea className="form-control" id="form6Example7" rows="4"></textarea>
              </div> */}

              </div>
                <button type="submit" className="btn btn-dark btn-block mb-4 registerbtn">Register</button>
            </form>



          </div>
        </div>
      </div>
    </div>
    </div>
      {/* <div className="signup">
        <div className="container-form-signup ">
         
       

            <h3 className="text-center mt-3" >Registration Form</h3>
       
            <form className="container">

            <div className="row">
                <div className="col-md-6 offset-md-3">
                  <label className="form-label  text-light md-3"  for="form6Example1">First name</label>
                  <input type="text" id="form6Example1" className="form-control col-md-6" placeholder="Jack" required/>
                </div>
                <div className="col-md-6">

                  <label className="form-label text-light md-3" for="form6Example2">Last name</label>
                  <input type="text" id="form6Example2" className="form-control col-md-6" placeholder="Nir" required/>
                </div>
            </div> */}

             
{/* 
              <div className="form-outline mb-4 col-md-12">
                <label className="form-label text-light md-3" for="form6Example3">Username</label>
                <input type="text" id="form6Example3" className="form-control col-md-6" placeholder="JohnWick" required/>
              </div>

              <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3" for="form6Example5">E-mail Address</label>
                <input type="email" id="form6Example5" className="form-control col-md-6" placeholder="john13@gmail.com" required/>
              </div>



              <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3" for="form6Example3">Password</label>
                <input type="text" id="form6Example3" className="form-control col-md-6" placeholder="Enter your password" required/>
              </div>

              <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3" for="form6Example3">Confirm Password</label>
                <input type="text" id="form6Example3" className="form-control col-md-6" placeholder="Confirm Password" required/>
              </div>
              
              <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light  md-3" for="form6Example3">Phone Number</label>
                <input type="text" id="form6Example3" className="form-control col-md-6" placeholder="+962" required/>
              </div>


              <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3" for="form6Example4">City</label>
                <input type="text" id="form6Example4" className="form-control col-md-6" placeholder="Amman" required/>
              </div> */}



              {/* 
  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example6">service categories</label>
    <input type="text" id="form6Example6" className="form-control" />
  </div> */}
              {/* <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3 mr-3" for="form6Example6">Service Categories</label>
                <select id="services" name="services" required>
                
                  <option value="plumbing">Plumbing</option>
                  <option value="carpinting">Carpinting</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="welding">Welding</option>
                  <option value="agriculturing">Agriculturing</option>
                  <option value="building and construction">Building and Construction</option>
                </select> */}
                {/* <input type="chose" id="form6Example6" className="form-control" /> */}
              {/* </div> */}

              {/* <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3" for="form6Example6">Years of Experience</label>
                <input type="number" min = "0" id="form6Example6" className="form-control col-md-6" placeholder="Example: 1" required/>
              </div>


              <div className="form-outline mb-4 col-md-6">
                <label className="form-label text-light md-3" for="form6Example7">Additional Information</label>
                <textarea className="form-control" id="form6Example7" rows="4"></textarea>
              </div> */}


              {/* <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label className="form-check-label" for="form6Example8"> Create an account? </label>
  </div> */}

{/* 
              <button type="submit" className="btn btn-success btn-block mb-4  col-md-6">Register</button>
            </form>
          </div>
        </div> */}


    

      
    </>
  )
}