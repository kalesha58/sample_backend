const User = require("../model/userSignupSchema");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.bdoy.email });
    if (!user) {
      return res.status(401).send({ message: "Inavlaid email and Password" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Inavlaid email and Password" });
    }
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in  Successfull " });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports=userLogin