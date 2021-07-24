// Require express
const express = require('express');

// Require connectDB
const connectDB = require('./config/connectDB');


// Init express
const app = express();

// Middleware
app.use(express.json());

// connectDB
connectDB();

// Use routes
app.use('/api/user', require('./routes/user'));
app.use('/api/blog',require('./routes/blog'));

// Create port
const port = process.env.PORT || 5000;
// Launch the serveer
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);