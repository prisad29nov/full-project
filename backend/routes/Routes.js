const express = require("express");
const router = express.Router();
require("../db/connection");

const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticate = require("../middleware/authenticate");
const { json } = require("express");
router.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});
// router.get("/about", (req, res) => {
//   res.send("Welcome to page");
// });

//using Async Await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .send({ Error: "Please fill all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).send({ Error: "Email is already Register" });
    } else if (password !== cpassword) {
      return res.status(422).send({ Error: "Password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: " Registration Successfull " });
    }
  } catch (err) {
    console.log(err);
  }
});

// using Promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(422)
//       .send({ Error: "Please fill all the fields properly" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).send({ Error: "Email is already Register" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: " Registration Successfull " });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Registration failed" });
//         });
//     })
//     .catch((err) => console.log(err));
// });

router.post("/login", async (req, res) => {
  try {
    // let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ Error: "Please fill all the fields properly" });
    }

    const UserLogin = await User.findOne({ email: email });
    if (UserLogin) {
      const isMatch = await bcrypt.compare(password, UserLogin.password);

      const token = await UserLogin.generateAuthToken();

      res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
        secure: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "Login successful" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
 
  console.log("about page")
  res.send(req.rootUser);
  
});
module.exports = router;
