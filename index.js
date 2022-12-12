const express = require("express");
const connection = require("./dataBase/db.js");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser=require("body-parser");
const postRouter=require("./routes/userRoutes.js")

const app = express();
const PORT = 8082;
// ==================MIDLLE-WARE====================
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.get("/", (req, res) => {
  res.send("HOME");
});
// ===================ROUTERs=====================
app.use("/",postRouter)

 connection() 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
