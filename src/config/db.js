const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  console.log("process.env.MONGO_URI", uri); // Log the URI to ensure it is loaded correctly
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection
      .once("open", () => {
        console.log("Database Connected");
      })
      .on("error", (error) => {
        console.log("Error while connecting!", error);
      });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
