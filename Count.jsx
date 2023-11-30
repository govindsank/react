import React, {useState} from "react";
function Count(props){
    console.log(props);
    const[count,setCount]=useState(0);
    useState(()=>{
        let list= document.getElementById("list")
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                products:data.products
            });
        });
    },[]);
    return(
        <>
        <h2>{count}</h2>
        <button onClick={()=> setCount(count-1)}>-</button>
        <button onClick={()=> setCount(count+1)}>+</button>

        <div>
            <h2>{this.products}</h2>
        </div>
        </>

    )
}
export default Count;