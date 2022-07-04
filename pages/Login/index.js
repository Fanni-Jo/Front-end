import Link from 'next/link'
import axios from 'axios';
import Landing from '../Landing';
import {useState} from 'react'
import {useRouter} from 'next/router'
import { useThemeContext } from "../context/Theme"
function Login() {
  const router = useRouter();
  const [islogin, setlogin] = useThemeContext()
  const [token,setToken] =useState("")
  const [user, setuser] = useThemeContext()

  // const [islogin, setlogin] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();  
    const formData = {
      username:  e.target.username.value,
      password:  e.target.password.value,
    };

    await axios.post("https://fanni-jo.herokuapp.com/token/", formData)
      .then(res => {

        setToken(res.data.access)
        localStorage.setItem("jwt", res.data.access)
        console.log("token", res.data.access)
        setlogin(true)
        router.push('/')
        setuser( e.target.username.value)
      })
      .catch(e => {
        console.log("login error", e)
        alert('Username or Password is incorrect')

      }).finally(() => {
        setloading(false)
        
      })
  };


  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);
  const [loading,setloading]= useState(false)

  const togglePassword = (evnt) => {
    evnt.preventDefault();
    setShow(!show);
    if(show===true){
    
    setPasswordType("text")}
    else{
      setPasswordType("password")
    }
    
  }
  // if (islogin) return (
  //   <Landing/>
  // )

  return (
    <>



  <div className="container-fluid py-2 h-50 gradient-custom">
    <div className="row d-flex justify-content-center align-items-center h-50 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">

          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-1 pb-5 login-form" onSubmit={loginHandler}>
              <h2 className="fw-bold mb-2 text-uppercase text-warning">Login</h2>
              <p className="text-white-50 mb-5">Please enter your E-mail and Password!</p>
              <div className="form-outline form-white mb-4">
                <input type="text" id="username" className="form-control form-control-lg" required/>
                <label className="form-label" for="typeEmailX">username</label>
              </div>


                <div className="form-outline form-white mb-4">
                  <input type="text" id="username" className="form-control form-control-lg" required/>
                  <label className="form-label" for="typeEmailX">username</label>
                </div>


              <div >
              <button className="btn eye" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
              </div>

              <p className="small  pb-lg-2"><Link  href="/forget"><a href="!#" className="text-white-50" >Forgot password?</a></Link></p>
  
              <button className="btn btn-outline-warning btn-lg px-5 login-btn  " type="submit" disabled={loading} > Login</button>



            <div>
            <p className="pb-lg-2 mt-2">Don't have an account? <Link  href="/signup"><a href="!#" className="text-white-50 fw-bold" > Sign Up</a></Link></p>

            </div>
          </div>


      </div>
    </div>
  </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script> 
    
</>
  )

}

export default Login;
