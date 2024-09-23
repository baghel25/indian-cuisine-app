// backend/app.js
const express = require('express');
const dishRoutes = require('./routes/dishRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/dishes', dishRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
