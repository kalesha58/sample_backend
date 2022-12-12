const mongoose = require("mongoose");
// const autoIncrement=require("mongoose-auto-increment")

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    username: {
      type: String,
      required: [true, "Please add a username"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Please add a Phone Number"],
      
      
    },
  },

);
const User = mongoose.model("user", userSchema);
module.exports = User;
