const express = require('express')
const router = express.Router()

const User = require('../../schemas/UserSchema')

// "/api/auth/"

const get = (req, res) => {
  User.find()
    .select({ _id: 1, username: 1 })
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

const getProfile = (req, res) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

// const postProfile = (req, res) => {
//  ** this will be done on unrestricted side in registration**
// };

const deleteProfile = (req, res) => {
  const { id } = req.params
  User.findByIdAndRemove(id)
    .then(user => {
      res
        .status(200)
        .json({ Success: `${id} successfully removed from the database`, user })
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

const updateProfile = (req, res) => {
  const { id } = req.params
  const {
    username,
    firstName,
    lastName,
    password,
    cohort_name,
    skills,
    job_interests,
    about
  } = req.body
  User.findByIdAndUpdate(id, {
    username,
    firstName,
    lastName,
    password,
    cohort_name,
    skills,
    job_interests,
    about
  })
    .then(user => {
      res.status(200).json({ Success: `${id} successfully updated` }, user)
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

router.route('/users').get(get)

router
  .route('/users/:id')
  .get(getProfile)
  .delete(deleteProfile)
  .put(updateProfile)

router.route('/user').get(get)

router
  .route('/users/:id')
  .get(getProfile)
  .delete(deleteProfile)
  .put(updateProfile)

module.exports = router
