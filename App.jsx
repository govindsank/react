// import React from "react";

// class App extends React.Component{
//     constructor(props){
//         super();
//         console.log(props);
//     }
//     render(){
//         return (
//             <><h1>header</h1><Mid /></> 
//         );
//     }
// }
// class Mid extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <>
//             <h1>body</h1>
//             </>
//         )
//     }
// }

// export default App
// import React from "react";
// import './style.css'

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//             todo: []
//         }
//     }

//     handleIncrement = () => {
//         this.setState(state => ({
            
//             count: state.count + 1
//         }));
//     } 

//      shouldComponentUpdate(p, s) {
//         console.log(p, s);
//         console.log("should component update");
       
//         return this.state;
//     }

//     handleDecrement = () => {
//         this.setState(state => ({
//             count: state.count - 1
//         }));
//     }

//     componentDidMount() {
//         console.log("component did mount");
//     }

//     componentDidUpdate() {
//         console.log("component did update");
//     }

//     // shouldComponentUpdate(p, s) {
//     //     console.log(p, s);
//     //     console.log("should component update");
//     //     return true;
//     // }

//     render() {
//         return (
//             <>
//                 <div>
//                     <h1>Counter: {this.state.count}</h1>

//                     <button onClick={this.handleDecrement}>-</button>
//                     <button onClick={this.handleIncrement}>+</button>
                    
//                 </div>
//             </>
//         )
//     }
// }

// export default App;




import React from "react";
import './style.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            todo: []
        }
    }

    handleIncrement = () => {
        this.setState((state) => ({
            count: state.count + 1
        }));
    };

    handleDecrement = () => {
        this.setState((state) => ({
            count: state.count - 1
        }));
    };

    componentDidMount() {
        console.log("component did mount");
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    render() {
        return (
            <>
                <div>
                    <h1>Counter: {this.state.count % 2 !== 0 ? this.state.count : ''}</h1>

                    <button onClick={this.handleDecrement}>-</button>
                    <button onClick={this.handleIncrement}>+</button>
                </div>
            </>
        );
    }
}

export default App;