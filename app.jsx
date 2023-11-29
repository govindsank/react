import React from "react";
import { render } from "react-dom";

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            count:0,
            todo:[]
        };
    }
    clickHandler=(event)=>{
        event.preventDefault();
        let todo = event.target[0].value;
        this.setState({todo: [...this.state.todo,todo] });
        console.log(this.state);
    }
    del=(index)=>{
        this.setState({ todo: this.state.todo.filter((item,ind) => index != ind)});
    }
    edit=(index)=>{
        let newTodo=prompt("enter new todo");
        this.setState({todo: this.state.todo.map((item, ind) => ind == index ? newTodo : item)})
    }


render(){
    return(
        <>
        <form onSubmit={this.clickHandler}>
        <input type="text"name="todo"id="todo"/>
        <input type="submit" value="add"/>
        </form>
        <ol>
        {this.state.todo.map((item,index) =>(
        <li key={index}>{item}<button onClick={() => this.del(index)}>delete</button><button onClick={() => this.edit(index)}>edit</button> </li>
        ))}
        </ol>
        </>
    )
}
}
// class Nav extends React.Component{
//     constructor(props){
//         super();
//         this.props=props;
//     }
//     render(){
//         return(<>
//         <p>hello</p>
//         </>);
        
//     }
// }
// class footer extends React.Component{
//     constructor(props){
//         super();
//     }
//     render(){
//         return(<>
//         <p>hii111</p>
//         </>)
//     }
// }
export default App;