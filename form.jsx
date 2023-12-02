import React,{createContext,useContext, useState} from "react";

const ThemeContext = createContext();

function App3(props){
    const[stt,setStt]=useState({
        username:"",
        password:"",
        mobile:""
    })
    let theme ={
        background:"black",
        color:"white",
        stt,
        setStt
    };
    return (
        <>
        <ThemeContext.Provider value={theme}>
            <Section/>
        </ThemeContext.Provider>
        </>
    );
}

export default App3;

function Section(){
    return(
        <section>
            <Form/>
        </section>
    );
}

function Form(){
    return(
        <form>
            <Input type={"text"} />
            <Input type={"password"}/>
            <Input type={"number"} />
            <Input type={"submit"}/>
        </form>
    );
}

function Input({type}){

    const{stt,setStt,...theme2} = useContext(ThemeContext);
    
    console.log(theme2);
    return<input type={type} style={theme2} placeholder={type}/>
}

