import Link from 'next/link'
import {useState} from 'react';
function ResetPassword() {
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
    <div className="container-fluid py-2 h-50 gradient-custom">
    <div className="row d-flex justify-content-center align-items-center h-50 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">

          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-1 pb-5 login-form">

              <h2 className="fw-bold mb-2 text-uppercase text-warning">Reset Password</h2>
              <p className="text-white-50 mb-5 ">Please enter your new password</p>

              <div className="form-outline form-white mb-4">
                <input type={passwordType}  id="typePassword1" className="form-control form-control-lg"  name="password" required/>
                <label className="form-label" htmlFor="typePassword1">Password</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type={passwordType}  id="typePassword1" className="form-control form-control-lg"  name="password" required/>
                <label className="form-label" htmlFor="typePassword1">Confirm Password</label>
        

              </div>
              <div >
              <button className="btn eye" onClick={togglePassword} >
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
              </div>
              

              <button className="btn btn-outline-warning btn-lg px-5 login-btn " type="submit">Confirm</button>
            </form>

          </div>

      </div>
    </div>
  </div>   
  )
}

export default ResetPassword