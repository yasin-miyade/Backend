// app.js (Express API and CRUD Routes)

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON in the request body

app.get('/', (req, res) => {
    res.send('Blog Platform Backend Running!');
  });

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
