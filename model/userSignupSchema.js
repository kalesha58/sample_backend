const mongoose = require("mongoose");

const userSignupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSignupSchema.method.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_KEY,{expiresIn:"1d"})
    return token
}
const User=mongoose.model("signUser",userSignupSchema)
module.exports=User
