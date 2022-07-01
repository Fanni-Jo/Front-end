import React from 'react'
import Link from 'next/link'

function Login() {
  return (
<>

     
<div >
<div className ="container-fluid bg ">
    <div className ="row">
        <div className ="col-md-4 boxplace">
      <form className='container-form'>
      <h3 className="text-center">Login</h3>

        <div className="form-group">
          <label className="font-weight-bold"for="exampleInputUsername">Username</label>
          <input type="email" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username"></input>
          
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
       
        <button type="submit" className="btn btn-success btn-block">Login</button>
        <div className = "mt-2" >
       New User? <Link href="/signup"><a   className='fw-bold text-success text-decoration-none font-italic' href>Signup </a></Link>
      </div>
      </form>
      </div>


    </div>
</div>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    
</>
  )
}

export default Login