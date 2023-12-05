import React,{useState,useEffect} from "react";
import axios from "axios"
app
// function Form(props){
//     const [stt,setStt] =useState({
//         username:"",
//     });
//     useEffect(()=>{
//         let res= axios.get("http://localhost:3000/register");
//         res.then(data =>{
//             console.log(data);
//         })
//     },[]);
//     return(
//         <>
//         </>
//     );
// }

function Register(){
    const register = async()=>{
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        res=await axios.post("http://localhost:3000/register",{
            username,
            password
        })
        if(res.status ==200){
            console.log(res);
            alert("successful")
        }
    }
    return(
        <>
            <h2>Register</h2>
            <input type="text" name="username" id="username" placeholder="username"/>
            <input type="password" name="password" id="password" placeholder="password"/>
            <input type="submit" value="register" onClick={register}/>
        </>
    );
}
export default Register