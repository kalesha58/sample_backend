const User = require("../model/userSchema");

const addUser = async (req, res) => {
  const user = req.body;
  console.log(user)
  const newUser = new User(user);
  try {

    const Data=await newUser.save();
    
    res.status(201).json(Data);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
const getUser=async (req,res)=>{
  try {
      const data=await  User.find({})   
      res.status(200).json(data) 
  } catch (error) {
    res.status(400).send({ message: error });
  }
}
module.exports = addUser;
// module.exports = getUser;
