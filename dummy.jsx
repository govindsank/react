
import React from "react";

class Dummy extends React.Component {
    constructor() {
        super();
        this.state={
            products:[],
        };
        }
        componentDidMount(){
            fetch("https://dummyjson.com/products")
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                this.setState({
                    products:data.products
                });
            });
        }
        render(){
            const style ={
                display:"flex",height:"8rem"
            }
            return(
                <>
                {
                    this.state.products.map((item, index)=>(
                        <React.Fragment key={index}>
                            <img src={item.thumbnail}alt="Product"loading=""lazy/>
                            <h3>{item.title}sd</h3>
                            <p>{item.description}</p>
                            <div style={style}>
                                {item.images.map((img,ind)=>(
                                    <img src={img} key={img} loading="lazy" />
                                ))}
                            </div>
                            <br/>
                        </React.Fragment>
                    ))}
                </>
            );
        }
    }

export default Dummy;