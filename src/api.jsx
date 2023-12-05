import React,{useState,useEffect } from "react";

import axios from "axios";

function App4(props){
    const[stt,setStt]=useState({
        username:"",
    });
    useEffect(()=>{
        let res =axios.get("https://dummyjson.com/products");
        res.then(data =>{
            console.log(data);
        })
    },[]);
    return(
        <>
        </>
    );
}
export default App4