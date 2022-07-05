import Link from 'next/link'
import Image from  'next/image'
import NavLogin from './NavLogin';
import { useThemeContext } from "../context/Theme"
import NavLogout from "./NavLogout"

function Navbar() {
  const [islogin, setlogin] = useThemeContext(false);
  const [user, setuser] = useThemeContext();
  return (
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top">
        <div className="container-fluid">
          {/* <Image src={favcon} alt="sorry" width="30" height="24" className ="d-inline-block align-text-top p-l-5 " /> */}
          <Link href="/">
            <a className="navbar-brand text-warning" href="#">
              Fanni
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page" href="">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#features">
                  <a className="nav-link active" aria-current="page" href="#">
                    Features
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/#services">
                  <a className="nav-link active" aria-current="page" href="../Services">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#about">
                  <a className="nav-link active" aria-current="page" href="">
                    About us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#team">
                  <a className="nav-link active" aria-current="page" href="">
                    Team
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#contact">
                  <a className="nav-link active" aria-current="page" href="">
                    Contact us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {!islogin && <NavLogin/>}
        {islogin && <p className='text-light m-2'>{user}</p>}
        {islogin && <NavLogout/>}

      </nav>
    );
  
}

export default Navbar