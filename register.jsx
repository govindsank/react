import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"

function App6(props){
  const [login, setLogin]=useState(false);
  const [profile, setProfile]=useState(false);

  return(
    <>
    {!login?(
      <Register setLogin={setLogin}/>
    ):(
      <login setProfile={setProfile}/>
    )}
    </>
  );
}
export default App6;

function Register({setLogin}){
    const navigate=useNavigate();
  const register = () => {
    let username =document.getElementById("username").value;
    let password =document.getElementById("password").value;
    let mobile =document.getElementById("mobile").value;
    let response =axios.post("http://localhost:3000/register",{
      username,
      password,
      mobile
    });
    response.then((res)=>{
      alert(res.data);
      if(res.status ==200){
        setLogin(true);
      } navigate("/login")
    })
   
    .catch(error=>{
      alert(res.data);
      console.log(error);
    });
  };
  return(
    <>
    <h2>Register</h2>
    <input type="text" name="username" id="username" placeholder="username" />
    <input type="password" name="password" id="password" placeholder="password" />
    <input type="number" name="mobile" id="mobile" placeholder="mobile"/>
    <input type="submit" value="register" onClick={register} />
    </>
  );
}
function Login({setProfile}){
  return(
    <>
    <h2>Login</h2>
    <input type="text" name="username" id="username" placeholder="username" />
    <input type="password" name="password" id="password" placeholder="password" />
    <input type="submit" value="register" />
    </>
  )
}