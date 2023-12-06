import { useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem("token","a1b2c3d4e5f6");
        navigate("/profile");
    }
    return(
        <div>
            <h3>Login</h3>
            <form>
            <input type="text" name="username" id="username" />
            <input type="password" name="password" id="password" />
            <button onClick={login}type="button">login</button>
            </form>
        </div>
    );
}
export default Login;