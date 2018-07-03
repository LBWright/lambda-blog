const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const database = 'LambdaBlogDb'
const userRouter = require('./routes/unrestricted/userRouter')
const blogRouter = require('./routes/unrestricted/blogRouter')
const tagRouter = require('./routes/unrestricted/tagRouter')
const restrictedRouter = require('./routes/restricted/userRouter')
const cohortRouter = require('./routes/unrestricted/cohortRouter')

mongoose
  .connect(`mongodb://admin:admin1234@ds125041.mlab.com:25041/lambdablogdb`)
  .then(() => {
    console.log(`Connected to ${database}`)
  })
  .catch(err => {
    console.log({ Error: err.message })
  })

app.get('/', (req, res) => {
  res.send({ api: 'api working successfully!' })
})

const restricted = (req, res, next) => {
  const token = req.headers.authorization
  const secret = 'Blog-writing is so much fun!'

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Token was not decoded', err })
      }
      next()
    })
  } else {
    res.send({ message: 'Error in retrieving token.' })
  }
}

const corsOptions = {
  credentials: true
}

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api/auth', restricted, restrictedRouter)
app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/tags', tagRouter)
app.use('/api/cohorts', cohortRouter)

const PORT = process.env.PORT || '5000'

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
