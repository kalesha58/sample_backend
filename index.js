const express=require("express")

const app=express();
const PORT=8087;
app.get("/",(req,res)=>{
    res.send("HOME")
})
app.get("/c",(req,res)=>{
    res.send("FRom C")
})
app.listen(PORT,()=>{
    console.log("server http://localhost:8087")
})