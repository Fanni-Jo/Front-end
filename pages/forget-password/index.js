

function Forget() {
  return (
    <div className="container-fluid py-2 h-100  gradient-custom " id ="background-forget">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">

          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-1 pb-5 login-form ">

              <h2 className="fw-bold mb-2 text-uppercase text-warning ">Reset Password</h2>
              <p className="text-white-50 mb-5 ">Please enter your email address</p>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailForget" className="form-control form-control-lg" placeholder="fanni@gmail.com" required/>
                <label className="form-label" for="typeEmailForget" >E-Mail Address</label>

              </div>

              <button className="btn btn-outline-warning btn-lg px-5 login-btn  " type="submit">Confirm</button>
            </form>

          </div>

      </div>
    </div>
  </div>   
//     <div>
// <div class ="container">
//     <div class ="col-md-4 mt-4">

//       <h3>Forget Password</h3>

//       <form>
//         <div class="form-group">
//           <label for="exampleInputpass">Enter Your Email</label>
//           <input type="email" class="form-control" id="exampleInputpasss" aria-describedby="passHelp" placeholder="e-mail"/>
//            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
        
//         <button type="submit" class="btn btn-primary mt-3">Varificate</button>
//       </form>

//     </div>
// </div>
//     </div>
  )
}

export default Forget