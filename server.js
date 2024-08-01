const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Enable CORS for all routes
app.use(cors());

// Sample data to return
let sampleData = {
  users: [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ]
};

// GET endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET request received' });
});

// POST endpoint
app.post('/api/data', (req, res) => {
  const newUser = req.body;
  newUser.id = 1; // Simple ID assignment
  res.json({ message: 'User added', data: newUser });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
