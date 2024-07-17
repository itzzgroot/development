const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProfileModel = require('./models/Profile')

const app = express();

app.use(express.json());
app.use(cors());

const mongoURI = "mongodb://localhost:27017/myapplication";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully to MongoDB");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const connection = mongoose.connection;

app.post('/register', (req, res)=>{
    ProfileModel.create(req.body)
    .then(profiles=> res.json(profiles))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  ProfileModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Login successfully");
        } else {
          res.json("Password incorrect !!!");
        }
      } else {
        res.json("User not exist...!!");
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json("Server error");
    });
});

connection.once('open', () => {
  console.log("MongoDB connection established");
});

app.get('/', (req, res) => {
  res.json({ message: "hello" });
});
