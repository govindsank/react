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
import Counter from "./counter.jsx";
let root =document.getElementById("root");


ReactDOM.createRoot(root).render(<Counter/>)
