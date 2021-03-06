const express = require('express');
const router = express.Router()

const jwt = require('jsonwebtoken');
const User = require('../../schemas/UserSchema');
const Blog = require('../../schemas/BlogSchema');

//   "/api/users"



const tokenGenerator = user => {
  const options = {
    expiresIn: '24h'
  }

  const payload = { name: user.username };

  const secret = 'Blog-writing is so much fun!';

  return jwt.sign(payload, secret, options);
};

const getUsers = (req, res) => { //works in heroku
  User.find()
    .select()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ Error: err.message })
    });
};

const getProfile = (req, res) => { //works in heroku
    const { id } = req.params
    User.findById(id)
      .select({ _id: 0 })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(500).json({ Error: err.message })
      });
};

const getBlogPosts = (req, res) => {
    const { id } = req.params;
    const { blog_title, blog_body, tag } = req.body;

    Blog
        .findById(id)
        .then(blog => {
            if(blog.length > 0){
                res.status(200).json(blog);
            }
            else{
                res.status(404).json({Error: "no blogs were found by the specified user"});
            }
        })
        .catch(err => {
            res.status(500).json({Error: err.message});
        });
};

const register = (req, res) => { //works in heroku
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
    });
};

const login = (req, res) => { //works in heroku
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
    });
};



router.route('/').get(getUsers) //ok
router.route('/:id').get(getProfile) //ok
router.route('/:id/blogs').get(getBlogPosts)

router.route('/register').post(register) //ok

router.route('/login').post(login) //ok

module.exports = router
