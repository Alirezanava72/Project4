const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// SIGNUP

router.post("/signup", async function (req, res) {
    try {
      const { username, email, password } = req.body;
      // to make the password hashed to not showing it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hashSync(password, salt);
  
      const newUser = new User({ username, email, password: hashedPassword });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Login
router.post("/login", async function (req, res) {
    try {
        // Find a user in the database by their email
      const user = await User.findOne({ email: req.body.email });
        // If the user was not valid in the DB
      if (!user) {
        return res.status(404).json("User not found!");
      }
        // Compare the provided password with the hashed pass in DB   
      const match = await bcrypt.compare(req.body.password, user.password);
  
        // If the password does not match   
      if (!match) {
        return res.status(401).json("Wrong credentials!");
      }
      
        // Generating JWT for authentication
      const token = jwt.sign(
        { id: user._id},
        process.env.SECRET,
        { expiresIn: "3d" }
      );
        // extracting user info exp pass
      const { password, ...info } = user._doc;
        // cookiw with JWT and send user info as response
      res.cookie("token", token).status(200).json(info);
        // handle errors
    } catch (err) {
      res.status(500).json(err);
    }
  });


// Logout
router.get("/logout", async function (req, res) {
    try {
      res
        .clearCookie("token", { sameSite: "none", secure: true })
        .status(200)
        .send("User logged out successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;