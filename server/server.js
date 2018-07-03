const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const database = "heroku_r8hcb39h";
const userRouter = require("./routes/unrestricted/userRouter");
const blogRouter = require("./routes/unrestricted/blogRouter");
const tagRouter = require("./routes/unrestricted/tagRouter");
const restrictedRouter = require("./routes/restricted/userRouter");

const username = "lambdablog1234"
const password = "temp1234"

//'mongodb://user:pass@host:port/dbname';
mongoose.connect(`mongodb://${username}:${password}@ds125831.mlab.com:25831/${database}`)
// mongoose.connect(`mongodb://localhost:27017/${database}`)
  .then(() => {
    console.log(`Connected to ${database}`);
  })
  .catch(err => {
    console.log({Error: err.message});
  });

app.get('/', (req, res) => {
  res.send({api: "api working successfully!"});
});

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = "Blog-writing is so much fun!";

  if(token){
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        return res
          .status(401)
          .json({ message: 'Token was not decoded', err });
      } 
      next();
    });

  } 
  else{
    res.send({message: "Error in retrieving token."})
  }
}


const corsOptions = {
  credentials: true
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/auth', restricted, restrictedRouter);
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/tags', tagRouter);

const PORT = process.env.PORT || '25831';



app.listen(PORT, () => {

  console.log(`Listening on port ${PORT}`)
})
