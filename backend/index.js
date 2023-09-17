const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Collection = require('./models/mongo'); // Assuming this is your model

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://adityathakur6199:mern123@cluster0.tx7zc2l.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await Collection.findOne({ email });

    if (existingUser) {
      // If a user with the same email exists, respond with a conflict status (HTTP 409)
      res.status(409).json('User already exists');
    } else {
      // Create a new user if no user with the same email exists
      const newUser = new Collection({ email, password });
      await newUser.save();
      // Respond with a success message
      res.json('Registration successful');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json('Error during registration');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user with the given email and password exists
    const user = await Collection.findOne({ email, password });

    if (user) {
      // If a user with the provided credentials is found, respond with a success message or user data
      res.json('Login successful');
    } else {
      // If no matching user is found, respond with an error message
      res.status(401).json('Invalid credentials');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json('Error during login');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
