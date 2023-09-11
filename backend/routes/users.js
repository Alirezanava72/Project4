const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const News = require("../models/News");
const Comment = require("../models/Comment");
// const verifyToken = require("../verifyToken");

// Update user details
router.put("/:id", async function (req, res) {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hashSync(req.body.password, salt);
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Delete a User
// by deleting a user all comments and news pulished by that user needs to be deleted as well

router.delete("/:id", async function (req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        await News.deleteMany({ userId: req.params.id });
        await Comment.deleteMany({ userId: req.params.id });
        res.status(200).json("User has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET User

router.get("/:id", async function (req, res) {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;