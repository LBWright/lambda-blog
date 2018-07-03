const express = require('express');
const router = express.Router();

const Tags = require("../../schemas/TagSchema")


// "/api/tags/"

const get = (req, res) => { //works in heroku
  Tags
    .find()
    .then(tags => {
        res.status(200).json(tags);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const post = (req, res) => {
  const { tag_body } = req.body
  Tags
    .create({ tag_body })
    .then(tag => {
        res.status(201).json(tag);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const getID = (req, res) => {
    const { id } = req.params;
    
    Tags
      .findById(id)
      .then(tag => {
          res.status(200).json(tag);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const deleteID = (req, res) => {
    const { id } = req.params;

    Tags
      .findByIdAndRemove(id)
      .then(deletedTag => {
          res.status(200).json({Success: `${id} successfully deleted from database`, deletedTag})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const updateID = (req, res) => {
    const { id } = req.params;
    const { tag_body } = req.body;

    Tags
      .findByIdAndUpdate(id, { tag_body })
      .then(prevTag => {
          res.status(200).json({Success: `${id} successfully updated`, prevTag})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};



router.route('/')
    .get(get) //ok
    .post(post);

router.route('/:id')
    .get(getID)
    .delete(deleteID)
    .put(updateID);

module.exports = router;