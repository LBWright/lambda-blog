const express = require('express');
const router = express.Router();

const Blog = require("../../schemas/BlogSchema");

// "/api/auth/blogs" 

const deleteID = (req, res) => {
    const { id } = req.params;

    Blog
      .findByIdAndRemove(id)
      .then(deletedBlog => {
          console.log(deletedBlog);
          res.status(200).json({Success: `${id} successfully deleted from database`})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const updateID = (req, res) => {
    const { id } = req.params;
    const { blog_title, blog_body, tag, userId } = req.body;

    Blog
      .findByIdAndUpdate({id, blog_title, blog_body, tag, userId })
      .then(prevBlog => {
          res.status(200).json({Success: `${id} successfully updated`})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const post = (req, res) => {
    const { blog_title, blog_body, tag, userId} = req.body;
    if(!req.body){
        res.status(400).json({Error:"blog_title and blog_body required"});
    }
    Blog
      .create({ blog_title, blog_body, tag, userId})
      .then(blog => {
          console.log(blog)
          res.status(201).json(blog);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
  };




router.route('/:id')
    .delete(deleteID)
    .put(updateID);

router.route('/')
    .post(post);


module.exports = router;


