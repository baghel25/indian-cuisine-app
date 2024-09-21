// frontend/src/components/DishList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await axios.get('/api/dishes');
      setDishes(data);
    };
    fetchDishes();
  }, []);

  return (
    <div>
      <h2>Dish List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Diet</th>
            <th>Preparation Time</th>
            <th>Cooking Time</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map(dish => (
            <tr key={dish.name}>
              <td>
                <Link to={`/dish/${dish.name}`}>{dish.name}</Link>
              </td>
              <td>{dish.ingredients}</td>
              <td>{dish.diet}</td>
              <td>{dish.prep_time}</td>
              <td>{dish.cook_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DishList;
