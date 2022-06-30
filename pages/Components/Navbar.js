import Link from 'next/link'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark  ">
        <div className="container-fluid">
          {/* <Image src={favicon} alt="sorry" width="30" height="24" className ="d-inline-block align-text-top p-l-5 " /> */}
          <Link href="/">
            <a className="navbar-brand" href="#">
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
                <Link href="/">
                  <a className="nav-link active" aria-current="page" href="../Services">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page" href="">
                    About us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page" href="">
                    Contact us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="btn-group mr-2 me-2"
          role="group"
          aria-label="First group"
        >
          <button className="btn btn-warning btn-sm ">Login</button>
          <button className="btn btn-warning btn-sm">Signup</button>
        </div>
      </nav>
    );

{/* <nav className="navbar navbar-expand-lg bg-light fixed-top">
<div className="container-fluid">
  <a className="navbar-brand fw-bold fst-italic" href="#">Fanni</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Our Services
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider"></hr></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Contact Us</a>
      </li>
    </ul>
    <form className="d-flex" role="search">
        
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className ="m-4">
      <a href="">Profile</a>
    </div>
  </div>
</div>
</nav> */}
  
}

export default Navbar