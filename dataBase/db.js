const mongoose = require("mongoose");
const connection = async () => {
  try {
     await mongoose.connect(
      process.env.MONGODB_URL,
      { useUnifiedTopology: true, useNewUrlParser: true },
      () => {
        console.log("MONGODB CONNECTED ");
      }
    );
  } catch (error) {
    console.log("Error While Connectin The MONGODB");
  }
};
module.exports = connection;
