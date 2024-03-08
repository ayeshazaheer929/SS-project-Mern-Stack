const express = require('express');
const router = express.Router();
const cors = require('cors');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Doctor = require('../models/doctorsignup');
app.use(cors());

// Registration endpoint
// Uncomment the following code if you want to include registration functionality
/*
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    // const newUser = new User({ name, email, password: hashedPassword, role });
    
    // Save user to the database
    // await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/

// Signup endpoint
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;


// ... (remaining code)

router.post('/signup', async (req, res) => {
    const {
      name,
      email,
      password,
      specialty,
      experience,
      importantDocs,
      license,
    } = req.body;
  
    try {
      // Check if the doctor already exists
      const existingDoctor = await Doctor.findOne({ email });
      if (existingDoctor) {
        return res.status(400).json({ message: 'Doctor already exists' });
      }
  
      // Create a new doctor
      const newDoctor = new Doctor({
        name,
        email,
        password,
        specialty,
        experience,
        importantDocs,
        license,
      });
      await newDoctor.save();
  
      res.json({ message: 'Doctor signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  module.exports = router;
