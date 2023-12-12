import { Link } from "react-router-dom";
function Nav(){
    return (
        <>
        <h2>NavBar</h2>
        <span><Link to={"/"}>Home</Link></span>
        <span><Link to={"/upload"}>Home</Link></span>
        </>
    )
}
export default Nav