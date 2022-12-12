const express=require("express");
const connection = require("./dataBase/db");
const dotenv = require("dotenv").config();

const app=express();
const PORT=8087;
app.get("/",(req,res)=>{
    res.send("HOME")
})
app.get("/c",(req,res)=>{
    res.send("FRom C")
})
connection()
app.listen(PORT,()=>{
    console.log("server http://localhost:8087")
})