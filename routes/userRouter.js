const express=require("express");
const {getUsers} = require("../controllers/userController");
const {addUser} = require("../controllers/userController");
const {getUser} = require("../controllers/userController");
const {editUser} = require("../controllers/userController");
const {deleteUser} = require("../controllers/userController");

const router=express.Router();

router.post("/add",addUser)
router.get("/all",getUsers)
router.get("/:id",getUser)
router.patch("/:id",editUser)
router.delete("/:id",deleteUser)
module.exports=router