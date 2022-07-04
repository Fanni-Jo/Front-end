
import Link from "next/link";
const NavLogin = () => {
    return (  
        <div
        className="btn-group mr-2 me-2"
        role="group"
        aria-label="First group">
      <button className="btn btn-warning btn-sm "><Link  href='/Login'><a className="text-dark text-decoration-none ">Login</a></Link></button>
      <button className="btn btn-warning btn-sm"><Link  href='/signup'><a className="text-dark text-decoration-none ">Signup</a></Link></button>
    </div>
    );
}
 
export default NavLogin;