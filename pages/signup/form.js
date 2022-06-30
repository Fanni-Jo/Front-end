import Navbar from "../Components/Navbar"
// mb-8 pb-2 pb-md-0 mb-md-5 px-md-2
export default function Form(){
    return (
      <> 
      <h3 className="text-center my-2  mb-4">Registration Form</h3>
      {/* <h4 className="my-3 fs-6 text-center m-4 ">welcom to Fanni JO</h4> */}
<form className="container m-10 ">
  
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" for="form6Example1">First name</label>
        <input type="text" id="form6Example1" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <label className="form-label" for="form6Example2">Last name</label>
        <input type="text" id="form6Example2" className="form-control" />
      </div>
    </div>
  </div>



  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example3">Phone no.</label>
    <input type="text" id="form6Example3" className="form-control" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example3">username</label>
    <input type="text" id="form6Example3" className="form-control" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example3">password</label>
    <input type="text" id="form6Example3" className="form-control" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example3">confirm password</label>
    <input type="text" id="form6Example3" className="form-control" />
  </div>

 
  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example4">Address</label>
    <input type="text" id="form6Example4" className="form-control" />
  </div>


  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example5">Email</label>
    <input type="email" id="form6Example5" className="form-control" />
  </div>


  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example6">service categories</label>
    <input type="text" id="form6Example6" className="form-control" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example6">Years of experience</label>
    <input type="number" id="form6Example6" className="form-control" />
  </div>


  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example7">Additional information</label>
    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
  </div>


  {/* <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label className="form-check-label" for="form6Example8"> Create an account? </label>
  </div> */}


  <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
</form>
</> 
    )
}