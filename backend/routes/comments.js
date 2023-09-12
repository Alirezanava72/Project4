const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const News = require('../models/News');
const Comment = require('../models/Comment');
const verifyToken = require("../verifyToken");

// Add comments
router.post("/create", verifyToken, async function (req, res) {
    try {
      const newComment = new Comment(req.body);
      const savedComment = await newComment.save();
      res.status(200).json(savedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Edit Comment
  router.put("/:id", verifyToken, async function (req, res) {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Delete Comment
  router.delete("/:id", verifyToken, async function (req, res) {
    try {
      await Comment.findByIdAndDelete(req.params.id);
    //   await Comment.deleteMany({ newsId: req.params.id });
      res.status(200).json("Comment has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  
  // GET News Comments
  router.get("/news/:newsId", async function (req, res) {
    try {
      const comments = await Comment.find({ newsId: req.params.newsId });
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;