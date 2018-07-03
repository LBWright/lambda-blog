const express = require('express');
const router = express.Router();

const Blog = require("../../schemas/BlogSchema");

// "/api/auth/" 

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
    const { blog_title, blog_body } = req.body;

    Blog
      .findByIdAndUpdate({id, blog_title, blog_body })
      .then(prevBlog => {
          res.status(200).json({Success: `${id} successfully updated`})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const post = (req, res) => {
    const { blog_title, blog_body, tag} = req.body;
    if(!blog_title || !blog_body){
        res.status(400).json({Error:err.message});
    }
    Blog
      .create({ blog_title, blog_body, tag})
      .then(blog => {
          console.log(blog)
          res.status(201).json(blog);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
  };

router.route('/blogs/:id')
    .delete(deleteID)
    .put(updateID);

router.route('/blogs')
    .post(post);


module.exports = router;