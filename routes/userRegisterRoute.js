const userLogin = require("../controllers/userLogin");
const userRegister = require("../controllers/userRegister");

const router=require("express").Router();
router.post("/",userRegister)
router.post("/",userLogin)
module.exports=router