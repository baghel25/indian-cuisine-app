import React, { useEffect, useState } from 'react';

const DishPage = ({ dishId }) => {
    const [dish, setDish] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dishes/${dishId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Normalize ingredients
                const normalizedDish = {
                    ...data,
                    ingredients: Array.isArray(data.ingredients) ? data.ingredients : data.ingredients.split(',').map(i => i.trim()),
                };
                
                setDish(normalizedDish);
            } catch (error) {
                console.error('Error fetching dish data:', error);
                setError('Failed to fetch dish data');
            }
        };

        fetchDish();
    }, [dishId]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!dish) {
        return <div>Loading...</div>;
    }

    console.log('Dish data:', dish); // Log to inspect the dish object

    return (
        <div>
            <h2>{dish.name}</h2>
            <p>
                Ingredients: {Array.isArray(dish.ingredients) ? dish.ingredients.join(', ') : 'No ingredients available'}
            </p>
        </div>
    );
};

export default DishPage;
