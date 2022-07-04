import { useState } from "react";
import Link from "next/link";

export default function signupOption() {
  return (
    <>


<div className="container-fluid py-2 h-50 gradient-custom">
    <div className="row d-flex justify-content-center align-items-center h-50 body-hub ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">

          <div className="card-body p-5 text-center hub">

            <form className="mb-md-5 mt-md-1 pb-5 login-form">

              <h2 className="fw-bold mb-2 text-uppercase text-warning">Who are you?</h2>


              <div className="col-md-6 offset-md-3 borderform text-center ">
              <Link href="/signup/ClientSignUp">
                <a className="text-decoration-none"> Are You a Client? </a>
              </Link>
            </div>
            <div className="col-md-6 offset-md-3 borderform text-center">
              <Link href="/signup/WorkerSignUp">
                <a className="text-decoration-none"> Are You a Worker?</a>
              </Link>
            </div>

            
            </form>

          </div>

      </div>
    </div>
  </div> 
      {/* <div className="container-hub">
        <div className="container register-container">
          <div className="row ">
            
            <div className="col-md-6 offset-md-3 borderform text-center ">
              <Link href="/signup/ClientSignUp">
                <a> Are You a Client? </a>
              </Link>
            </div>

            <div className="col-md-6 offset-md-3 borderform text-center">
              <Link href="/signup/WorkerSignUp">
                <a> Are You a Worker?</a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

{
  /* 
<div className="col-md-6 col-sm-12 col-lg-6 mb-3">
<button onClick={toggleClientSignUp} id="form6Example4" className=" btn btn-primary form-control" value = "Client"/>
</div>
{client===true?<Link href="/ClientSignup"><ClientSignup/></Link>:null}
<div className="col-md-6 col-sm-12 col-lg-6 mb-3">
<button onClick={toggleSignUpWorker} id="form6Example4" className=" btn btn-primary form-control" value = "Worker"/>
Pass
{worker===true?<WorkerSignup/>:null}

</div> */
}
//   const [client, setClient] = useState(false);
//   const [worker, setWorker] = useState(false);

//   const toggleClientSignUp =(event)=>{

//         event.preventDefault();
//         setClient(!client);

//         if(client===true){

//         // setClient(false)}
//         // else{
//         // setClient(true)
//         // }

//     }}

//     const toggleSignUpWorker =(event)=>{
//         event.preventDefault()
//         setWorker(!worker)
//         // if(worker===true){
//         // setWorker(false)}
//         // else{
//         // setWorker(true)
//         // }
//     }
