const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config({ path: "./config.env" });

app.use(require("./routes/Routes"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
