// backend/controllers/dishController.js
const dishes = require('../data/indian_food.json');  // Import converted JSON file

// Get all dishes
exports.getAllDishes = (req, res) => {
  res.json(dishes);
};

// Get a specific dish by name
exports.getDishByName = (req, res) => {
  const dish = dishes.find(d => d.name.toLowerCase() === req.params.name.toLowerCase());
  if (dish) {
    res.json(dish);
  } else {
    res.status(404).json({ message: 'Dish not found' });
  }
};

// Suggest dishes based on ingredients
exports.suggestDishes = (req, res) => {
  const { ingredients } = req.body;
  const possibleDishes = dishes.filter(dish => 
    ingredients.every(ing => dish.ingredients.toLowerCase().includes(ing.toLowerCase()))
  );
  res.json(possibleDishes);
};
