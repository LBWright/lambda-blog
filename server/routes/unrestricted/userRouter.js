const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const User = require('../../schemas/UserSchema')

//   "/api/users"

const tokenGenerator = user => {
  const options = {
    expiresIn: '24h'
  }

  const payload = { name: user.username }

  const secret = 'Blog-writing is so much fun!'

  return jwt.sign(payload, secret, options)
}

const getRoot = (req, res) => {
  User.find()
    .select({ _id: 0, username: 1, cohort_name: 1 })
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

const register = (req, res) => {
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
  const profile = {
    username,
    firstName,
    lastName,
    password,
    cohort_name,
    skills,
    job_interests,
    about
  }
  User.create(profile)
    .then(user => {
      console.log(user)
      const token = tokenGenerator(user)
      res.status(201).json({ message: `Welcome, ${user.username}`, token })
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

const login = (req, res) => {
  const { username, password } = req.body
  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.status(404).json({ Error: 'user not found' })
      } else {
        user
          .validatePassword(password)
          .then(match => {
            if (match) {
              const token = tokenGenerator(user)
              res.status(200).json({
                Message: `Welcome, ${user.username}, have a token`,
                token,
                username: user.username,
                id: user._id
              })
            } else {
              res.status(400).json({
                Message: 'username/password combination not found in database'
              })
            }
          })
          .catch(err => {
            res.status(500).json({ Error: err.message })
          })
      }
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    })
}

router.route('/').get(getRoot)

router.route('/register').post(register)

router.route('/login').post(login)

module.exports = router
