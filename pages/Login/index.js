import Link from 'next/link'
import axios from "axios"

function Login() {
  
  const logIn = async (event) => {  
    event.preventDefault();
    await axios.post('https://fanni-jo.herokuapp.com/login', {
        username: event.target.username.value,
        password: event.target.password.value
    }).then(res => {
      console.log(res)
    });
    }
  return (
    <>

{/* <section className="vh-50 gradient-custom"> */}
  <div className="container-fluid py-2 h-50 gradient-custom">
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">

          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-1 pb-5 login-form" onSubmit={()=>{logIn()}} >

              <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
              <p className="text-white-50 mb-5">Please enter your E-mail and Password!</p>

              <div className="form-outline form-white mb-4">
                <input type="username" id="username" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Username</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="password" className="form-control form-control-lg" />
                <label className="form-label" for="typePasswordX">Password</label>
              </div>

              <p className="small  pb-lg-2"><Link  href="/forget"><a className="text-white-50" href="#!">Forgot password?</a></Link></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

          

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
            </form>

          </div>

      </div>
    </div>
  </div>
{/* </section> */}

 

{/* <div className ="container-fluid bg  ">
    <div className ="row">
        <div className ="col-sm-4 boxplace">
          
      <form className='container-form'>
      <h3 className="text-center text-warning">Login</h3>
 


        <div className="form-group">
          <label className="font-weight-bold text-warning"for="exampleInputUsername">Username</label>
          <input type="email" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username"></input>
          
        </div>
        <div className="form-group">
          <label className="font-weight-bold text-warning" for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
       
        <button type="submit" className="btn btn-success btn-block text-light">Login</button>
        <div className = "mt-2 text-warning" >
       New User? <Link href="/signup"><a   className='fw-bold text-success text-decoration-none font-italic' href>Signup </a></Link>
      </div>
      </form>
      </div>


    </div>
</div> */}


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script> 
    
</>
  )
  
}

export default Login