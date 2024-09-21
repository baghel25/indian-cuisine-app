// frontend/src/components/DishSuggester.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DishSuggester = () => {
  const [ingredients, setIngredients] = useState('');
  const [suggestedDishes, setSuggestedDishes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientList = ingredients.split(',').map(i => i.trim());
    const { data } = await axios.post('/api/dishes/suggest', { ingredients: ingredientList });
    setSuggestedDishes(data);
  };

  return (
    <div>
      <h2>Dish Suggester</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter ingredients (comma-separated):
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <button type="submit">Suggest Dishes</button>
      </form>

      <h3>Suggested Dishes:</h3>
      <ul>
        {suggestedDishes.length > 0 ? (
          suggestedDishes.map((dish, index) => (
            <li key={index}>{dish.name}</li>
          ))
        ) : (
          <p>No dishes found. Please try different ingredients.</p>
        )}
      </ul>
    </div>
  );
};

export default DishSuggester;
