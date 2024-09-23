// backend/routes/dishes.js
const express = require('express');
const router = express.Router();
const dishesData = require('../data/indian_food.json'); // Assuming you convert CSV to JSON

router.get('/:name', (req, res) => {
  const dishName = req.params.name;
  const dish = dishesData.find(d => d.name.toLowerCase() === dishName.toLowerCase());

  if (dish) {
    res.status(200).json(dish);
  } else {
    res.status(404).json({ message: 'Dish not found.' });
  }
});

module.exports = router;
   