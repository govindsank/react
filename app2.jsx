import React,{useState,useEffect,useRef,useMemo} from "react";

import SCmp from "./sComponent.jsx";

function App2(props){
    const [count,setCount]=useState(0);
    const [data,setData]=useState(null);
    const listRef=useRef(null);

    const calc =()=>{
        console.log("calculation");
        return "result of calculator"
    }
    let result=useMemo(calc,[count]);
    console.log(result);

    useEffect(()=>{
        let list =document.getElementById("list")
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setData(data.products);
        });
        // console.log(listRef.current);
    },[]);
    return(
        <>
        <h1>hello world!!{count}</h1>
        <HCmp>ABCD</HCmp>
        {data?.map((item,index)=>(
            <HCmp key={index}>
                <div>{item.title}</div>
            </HCmp>
        ))}
        {/* <div id="list" ref={listRef}></div> */}
        </>
    )
}
export default App2

function HCmp({children}){
    return(
        <h1>{children}</h1>
    )
}