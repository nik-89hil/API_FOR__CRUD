const express = require("express");
const app = express();
const crud = require("./crud.js");




app.use("/crud",crud);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world:")
})


app.all("*",(req , res)=>{
    res.json({message:"page not found"});
})

app.use((error,req,res,next)=>{
    res.json({error:error.msg});
    next();
})



app.listen(8080,()=>{
    console.log("server started at port no. 8080...")
})