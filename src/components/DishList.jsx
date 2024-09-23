import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dishes`);
                const data = await response.json();
                setDishes(data);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };
        fetchDishes();
    }, []);

    return (
        <div>
            <h2>All Dishes</h2>
            <ul>
                {dishes.map(dish => (
                    <li key={dish.name}>
                        <Link to={`/dishes/${dish.name}`}>{dish.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DishList;
