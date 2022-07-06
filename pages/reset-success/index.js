import Link from 'next/link'
import Image from 'next/image'
import check from '../src/img/checked-success.svg'

function Success() {
  return (
    <div className="container-fluid py-2 h-20 gradient-custom " id ="background-forget">
          <div className="card-body p-5 text-center mt-5">

              <h5 className="fw-bold mb-2 text-uppercase text-warning">Your Password has been successfully reset</h5>
              <div><Image width="100" height="100" src={check}/></div>   
                <Link href="/Login"><button className="btn btn-outline-warning btn-lg px-5 login-btn mt-3 " type="submit">Go Back To Login Page</button></Link>
          </div>
  </div>  
  )
}

export default Success