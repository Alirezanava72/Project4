const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const News = require('../models/News');
const Comment = require('../models/Comment');


// Add news
router.post("/create", async function (req, res) {
    try {
      const newNews = new News(req.body);
      const savedNews = await newNews.save();
      res.status(200).json(savedNews);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Edit News
  router.put("/:id", async function (req, res) {
    try {
      const updatedNews = await News.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedNews);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Delete News
  router.delete("/:id", async function (req, res) {
    try {
      await News.findByIdAndDelete(req.params.id);
    //   await Comment.deleteMany({ newsId: req.params.id });
      res.status(200).json("News has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET News details
  router.get("/:id", async function (req, res) {
    try {
      const news = await News.findById(req.params.id);
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET All News
  router.get("/", async function (req, res) {
    
    try {
      const news = await News.find();
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET USER News
  router.get("/user/:userId", async function (req, res) {
    try {
      const news = await News.find({ userId: req.params.userId });
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;