const express = require('express');
const cors = require('cors');
const fs = require('fs');
const file = require('./data/indian_food.json')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const data = JSON.parse(fs.readFileSync(file));
const data = file;

app.get('/api/dishes', (req, res) => {
    res.json(data);
});

app.get('/api/dishes/:name', (req, res) => {
    const dish = data.find(d => d.name.toLowerCase() === req.params.name.toLowerCase());
    if (dish) {
        res.json(dish);
    } else {
        res.status(404).json({ message: 'Dish not found' });
    }
});

// app.get('/api/suggested-dishes', (req, res) => {
//     const { ingredients } = req.query; // Expecting a comma-separated list
//     const ingredientList = ingredients ? ingredients.split(',').map(i => i.trim()) : [];
//     const suggestedDishes = data.filter(dish =>
//         dish.ingredients.some(ingredient => ingredientList.includes(ingredient))
//     );

//     res.json(suggestedDishes);
// });

app.get('/api/suggested-dishes', (req, res) => {
    try {
        const { ingredients } = req.query;

        if (!ingredients) {
            return res.status(400).json({ message: 'No ingredients provided' });
        }

        const ingredientList = ingredients.split(',').map(i => i.trim());

        const suggestedDishes = data.filter(dish => {
            // Split the dish's ingredients string into an array
            const dishIngredients = dish.ingredients.split(',').map(i => i.trim());
            return dishIngredients.some(ingredient => ingredientList.includes(ingredient));
        });

        if (suggestedDishes.length === 0) {
            return res.status(404).json({ message: 'No dishes found for the provided ingredients' });
        }

        res.json(suggestedDishes);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
