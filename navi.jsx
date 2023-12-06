import { Link } from "react-router-dom";
function Nav(){
    return(
       <>
       <h2>
        Navbar
       </h2>
       <span><Link to={"/"}>Home</Link></span>
       <span><Link to={"/about"}>about</Link></span>
       <span><Link to={"/contact-us"}>Contact</Link></span>
       <span><Link to={"/login"}>Login</Link></span>
       </>
    );

}
export default Nav;