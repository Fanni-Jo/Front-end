import Image from 'next/image';
import github from '../src/img/footer/github-svgrepo-com.svg';


import linkedin from '../src/img/footer/linkedin.svg'

function Footer() {
  return (

<div > 
        <footer className="footer py-2 bg-dark ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start text-light">Copyright &copy; Fanni-Jo Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2 bg-warning" href="https://github.com/Fanni-Jo" aria-label="git"><Image src={github} alt= ""/></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="linkedin"><Image src={linkedin} alt= ""/></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3 text-light" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none text-light" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        </div>


  )
}

export default Footer