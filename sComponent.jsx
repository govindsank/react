import { memo } from "react";

function Scmp(props){
    console.log("Scomponent");
    return(
        <>
        <h2>second component!{props.count}</h2>
        <button onClick={props.inc}>+</button>
        </>
    )
}

export default memo(Scmp);