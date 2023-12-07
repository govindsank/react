import { useNavigate } from "react-router-dom";

function Profile(){
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <div>
            <h3>this is profile</h3>
            <button onClick={logout}>logout</button>
        </div>
    );
}
export default Profile