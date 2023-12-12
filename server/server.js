import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import con from "./connection.js";
import path from "path";

dotenv.config();


const app=express();
app.use(cors());
app.use(express.static("./dist"));
app.get("/get",(req,res)=>{
    return res.json("GET END POINT");
})
app.get("/*",(req,res)=>{
    return res.sendFile(path.resolve("/dist/index.html"));
})
// app.listen(process.env.port,error =>{
//     if(error){
//         return console.log(error);
//     }
//     console.log("server started");
// })
con().then(()=>{
    app.listen(process.env.PORT,(error)=>{
        if(error){
            return console.log(error);
        }
        console.log(`server statrt at port ${process.env.PORT}`);
    })
})
.catch(error =>{
    console.log(error);
})