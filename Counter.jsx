import React from "react";
import { render } from "react-dom";

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        };
    }
    clickHandlerP=(event)=>{
        event.preventDefault();
        this.state.count=this.setState.count+1;
        console.log(this.state.count);
        return this.state.count;

    }
    render(){
        return(
            <>
            <button onSubmit={() => this.clickHandlerP()}>+</button><p>{this.state.count}</p>
            </>
        )
    }
}
export default Counter