const User = require("../model/userSignupSchema");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User With Given Email Already Exits" });
    }
    const salt = await bcrypt.genSalt(Number(10));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User Created Succesfully....~~~~~~~ " });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
module.exports=userRegister