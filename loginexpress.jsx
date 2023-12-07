import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


  function Login(){
    const  navigate=useNavigate();
    const login=()=>{
        let username = document.getElementById("username").value;
        let password= document.getElementById("password").value;

        let response =axios.post("http://localhost:3000/login",{
            username,password
        });
        response.then((res)=>{
            alert(res.data.msg);
            if(res.status==200 && res.data.token){
                const token=res.data.token;
                localStorage.setItem("token",token);
                navigate("/profile")
            }
        })
        .catch(error=>{
            alert(error.response.data)
            console.log(error);
        })
    };
    return(
        <>
        <h2>Login</h2>
        <input type="text" name="username" id="username" placeholder="username" />
        <input type="password" name="password" id="password" placeholder="password" />
        <input type="submit" value="Login" onClick={login} />
        </>
    );
  }
  export default Login