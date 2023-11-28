import React from "react";
import { render } from "react-dom";

class App extends React.Component{
    constructor(){
        super();
    }


render(){
    return (<>
   <h1>hii</h1>
        </>
    );
}
}
class Nav extends React.Component{
    constructor(props){
        super();
        this.props=props;
    }
    render(){
        return(<h1>{this.props.text}</h1>)
    }
}
export default App;