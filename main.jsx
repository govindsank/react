// import React from "react";

// import  ReactDOM  from "react-dom/client";
// let root =document.getElementById("root");

// class Page extends React.Component{
//     constructor(){
//         super();
//     }

//     render(){
//         return (
//             <h1>hello world</h1>
//         );
//     }
// }
// ReactDOM.createRoot(root).render(<Page/>)

import React from "react";

import  ReactDOM  from "react-dom/client";
import App from "./app";
let root =document.getElementById("root");

class Page extends React.Component{
    constructor(){
        super();
    }

    clickHandler(event){
        event.preventDefault();
        let name=document.getElementById("name").value;
        console.log(name);
        alert(name);
    }

    render(){
        return (<>
        <form >
            <input type="text" id="name" />
            <button onClick={this.clickHandler}>click</button>
            </form>
            </>
        );
    }
}
ReactDOM.createRoot(root).render(<App/>)
