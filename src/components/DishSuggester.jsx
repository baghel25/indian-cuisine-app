import React, { useState } from 'react';

const DishSuggester = () => {
    const [ingredients, setIngredients] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSuggest = async () => {
      try {
          console.log('Fetching suggestions for ingredients:', ingredients);
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/suggested-dishes?ingredients=${ingredients}`);
          
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setSuggestions(data);
      } catch (error) {
          console.error('Error fetching suggested dishes:', error);
          alert('Failed to fetch suggested dishes. Please try again.');
      }
  };
  
  

    return (
        <div>
            <h2>Dish Suggester</h2>
            <input
                type="text"
                placeholder="Enter ingredients (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <button onClick={handleSuggest}>Suggest Dishes</button>
            <ul>
                {suggestions.map(dish => (
                    <li key={dish.name}>{dish.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DishSuggester;
