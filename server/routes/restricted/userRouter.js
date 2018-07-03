const express = require('express');
const router = express.Router();

const User = require('../../schemas/UserSchema');

// "/api/auth/"

const get = (req, res) => {
    User
      .find()
      .populate('cohort_name')
      .select({ _id: 1, username: 1})
      .then(users => {
          res.status(200).json(users);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
}


const getProfile = (req, res) => {
    const { id } = req.params;
    User
      .findById(id)
      .populate('cohort_name')
      .select({ _id: 1, username: 1})
      .then(user => {
          res.status(200).json(user)
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

// const postProfile = (req, res) => {
//  ** this will be done on unrestricted side in registration**
// };

const deleteProfile = (req, res) => {

};

const updateProfile = (req, res) => {

};

router.route('/user')
    .get(get);

router.route('/user/:id')
    .get(getProfile)
    .delete(deleteProfile)
    .put(updateProfile);






module.exports = router;