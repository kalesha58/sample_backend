const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./dataBase/db");
const addUser = require("./routes/userRouter.js");
const getUsers = require("./routes/userRouter.js");
const getUser = require("./routes/userRouter.js");
const editUser = require("./routes/userRouter.js");
// AUTH
const userRegister=require("./routes/userRegisterRoute.js")
const userLogin=require("./routes/userRegisterRoute.js")

const app = express();
const PORT = 8085;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("HOME");
});
app.use("/", addUser);
app.use("/", getUsers);
app.use("/:id", getUser);
app.use("/:id", editUser);
// ================================================AUTH ROUTES======================
app.use("/api/users",userRegister)
app.use("/api/auth",userLogin)
connection();
app.listen(PORT, () => {
  console.log(`Server PORT http://localhost:${PORT}`);
});
