import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function serviceProviderSignup() {
  
  const [islogin, setlogin] = useState(false);
  const [token,seToken] = useState()
  const config={headers:{'Authorization': `Bearer ${token}`}}
  const [category, setCategory] = useState("");

  const signUpHandler = async (event) => {
    event.preventDefault();
    event.target.first_name.focus()
    await axios
      .post("https://fanni-jo.herokuapp.com/api/signup/", {
        username: event.target.username.value,
        password: event.target.password.value,
        re_password: event.target.re_password.value,
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
      })
      .then(async (res) => {
        await axios
          .post("https://fanni-jo.herokuapp.com/token/", {
            username: event.target.username.value,
            password: event.target.password.value,
          })
          .then(async (res) => {
            localStorage.setItem("jwt", res.data.access);
            seToken(res.data.access)
            setlogin(true);
            await axios
              .get(
                `https://fanni-jo.herokuapp.com/api/user/${event.target.username.value}`
              )
              .then( async (id) => {
                localStorage.setItem("id", id.data);
                await axios.get('https://fanni-jo.herokuapp.com/api/category/')
                .then(async (categories)=>{ 
                  await categories.data.map(async (obj)=>{
                    if (obj.title===event.target.services.value){
                      setCategory(obj.id)
                      console.log(category)
                      return obj.id
                  }
                  }).then(async()=>{
                    await axios
                    .post("https://fanni-jo.herokuapp.com/api/signup/service-provider", {
                      phone: event.target.phone_number.value,
                      profile_picture: null || event.target.profile_picture,
                      phone2:null,
                      years_of_exp:event.target.years_of_exp.value,
                      address:event.target.city.value,
                      media:null||event.target.imageFile,
                      gender: event.target.gender.value,
                      username: localStorage.getItem("id"),
                      category: category
                      
                    },config)
                  })
                }).catch(
                  console.log("api service-provider error")
              )
          })
        console.log(res);
        console.log(res.data);
      })
      .catch(() => {
        toast.error("Username or Password is already registerd");
      })
    // event.target.reset();
    })};

  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);

  const togglePassword =(evnt)=>{

    evnt.preventDefault();
    setShow(!show);

    if(show===true){
    
    setPasswordType("text")}
    else{
      setPasswordType("password")
    }
    
  }
  
  return (
    <>
    <div className=" signup">
    <div className="container register-container ">
      <div className="row ">
        <div className="col-md-6 offset-md-3 borderform">
          <div className="signup-form">
            <form className="mt-5 " onSubmit={signUpHandler}>
              <div className="row">
              <h3 className="text-center " >Registration Form</h3>

              <div className="mb-3 col-md-6 col-sm-12 col-lg-6">
                  <label className="form-label text-light"  for="form6Example1">First name</label>
                  <input type="text" id="first_name" className="form-control" placeholder="Jack" required/>
              </div>

              <div className="mb-3 col-md-6 col-sm-12 col-lg-6">
                  <label className="form-label   text-light" for="form6Example2">Last name</label>
                  <input type="text" id="last_name" className="form-control" placeholder="Nir" required/>
              </div>

              <div className="col-md-12  col-sm-12  mb-3">
                <label className="form-label  text-light" for="form6Example3">Username</label>
                <input type="text" id="username" className="form-control" placeholder="JohnWick" required/>
              </div>

              <div className="col-md-12 col-sm-12  mb-3">
                <label className="form-label  text-light" for="form6Example5">E-Mail Address</label>
                <input type="email" id="email" className="form-control" placeholder="john13@gmail.com" required/>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label  text-light" for="form6Example3">Password</label>
                <input type={passwordType} id="password" className="form-control " placeholder="Enter your password" required/>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label  text-light text-fixed" for="form6Example3">Confirm Password</label>
                <input type={passwordType} id="re_password" className="form-control " placeholder="Re-enter your password" required/>
              </div>

              
              <div className="col-md-12 col-sm-12 col-lg-12 text-center">
                <button className="btn btn-dark form-label text-fixed" onClick={togglePassword} for="form6Example3">Show Password</button>
                
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-3  ">
              <label className="form-label mr-3 text-light " for="form6Example6">Service Categories</label>
                <select id="services" name="services" className="p-2 dropdown " required>
                  <option className = "option" value="Plumbing">Plumbing</option>
                  <option className = "option" value="Carpinting">Carpinting</option>
                  <option className = "option" value="Cleaning">Cleaning</option>
                  <option className = "option" value="Welding">Welding</option>
                  <option className = "option" value="Agriculturing">Agriculturing</option>
                  <option className = "option" value="Building and Construction">Building and Construction</option>
                </select>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example6">Years of Experience</label>
                <input type="number" min = "0" id="years_of_exp" className="form-control" placeholder="Example: 1" required/>
              </div>


              <div className="col-md-6 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example3">Phone Number</label>
                <input type="text" id="phone_number" className="form-control" placeholder="+962" defaultValue={'+962'} required/>
              </div>
              
              <div className="col-md-6 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example4">City</label>
                <input type="text" id="city" className="form-control " placeholder="Amman" required/>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example7">Image</label>
                <input type="file" id="imageFile" name="files" accept="image/*" className="text-light"  multiple defaultValue={null} />
              <div id="display-image"></div>
              </div>
             <div className="col-xs-12 col-sm-12  col-md-12 col-lg-6 mb-3">
                <label className="form-label text-light" for="form6Example7">Gender</label>
                <select id="gender" name="gender" className="p-2 dropdown " required>
                  <option className = "option" value="MALE">Male</option>
                  <option className = "option" value="FEMALE">Female</option>
                  </select>
              </div>
              </div>
                <button type="submit" className="btn btn-dark btn-block mb-4 registerbtn">Register</button>
            </form>



          </div>
        </div>
      </div>
    </div>
    </div>
     
    </>
  )
}

  