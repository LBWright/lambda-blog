const express = require('express');
const router = express.Router();

const Blogs = require("../../schemas/BlogSchema")


// "/api/blogs/"

const get = (req, res) => { //ok
  Blogs
    .find()
    .then(blogs => {
        res.status(200).json(blogs);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};



const getID = (req, res) => { //ok
    const { id } = req.params;
    
    Blogs
      .findById(id)
      .then(blog => {
          res.status(200).json(blog);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};





router.route('/')
    .get(get)

router.route('/:id')
    .get(getID)
    

module.exports = router;