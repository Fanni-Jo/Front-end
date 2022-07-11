import Link from "next/link";
import { useThemeContext } from "../../context/Theme"

const NavLogout = () => {
    const [islogin, setlogin] = useThemeContext();
    return ( 
        <>
        <div>
      <button className="btn btn-warning btn-sm" onClick={() => {setlogin(false)}}><Link  href='/'><a className="text-dark text-decoration-none ">Logout</a></Link></button>
      </div>
        </>
     );
}
 
export default NavLogout;