const mongoose = require('mongoose');
const Blog = require('../models/BlogModel');

const BlogController = {
  createPost: (req, res) => {
    const blog = new Blog({
      _id: mongoose.Types.ObjectId(),
      title: req.body.title,
      body: req.body.body,
      slug: req.body.slug,
      photo: req.body.photo
    });

    blog.save()
      .then((result) => res.status(201).json({
        status: res.statusCode,
        result
      }))
      .catch((error) => res.status(500).json({
        status: res.statusCode,
        message: `Ooops, something went wrong, ${error}`
      }));
  },
  getPosts: (req, res) => {
    Blog.find().exec()
      .then((result) => {
        result.length > 0 ? res.status(200).json({
          status: res.statusCode,
          result
        })
        : res.status(200).json({
          status: res.statusCode,
          message: "No posts have been added yet"
        })
      })
      .catch((error) => res.status(500).json({
        status: res.statusCode,
        message: `something went wrong: ${error}`
      }));
  }
};

module.exports = BlogController;
