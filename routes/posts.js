const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("we are on posts");
});

router.get("/", (req, res) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
  });
  post.save();
});

module.exports = router;
