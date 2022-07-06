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
              <Link href="/signup/client-signup">
                <a className="text-decoration-none"> Are You a Client? </a>
              </Link>
            </div>
            <div className="col-md-6 offset-md-3 borderform text-center">
              <Link href="/signup/worker-signup">
                <a className="text-decoration-none"> Are You a Worker?</a>
              </Link>
            </div>

            
            </form>

          </div>

      </div>
    </div>
  </div> 
      
    </>
  );
}


