const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log("false connection");
  });
