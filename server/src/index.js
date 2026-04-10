import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('✅ TaskFlow Backend is Running!');
});

app.get('/api', (req, res) => {
  res.json({ message: "TaskFlow API is working!" });
});

// Connect to MongoDB
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('❌ MongoDB Connection Error:', err.message);
  });