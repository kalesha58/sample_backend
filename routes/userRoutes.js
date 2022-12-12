const express=require("express");
const getUser = require("../controllers/userController");
const addUser = require("../controllers/userController");

const router=express.Router();
// ========================================ADD-USER================================
router.post("/add",addUser)
router.get("/all",getUser)
module.exports=router