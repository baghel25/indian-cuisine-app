// frontend/src/components/DishDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DishDetails = () => {
  const { name } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const fetchDish = async () => {
      const { data } = await axios.get(`/api/dishes/${name}`);
      setDish(data);
    };
    fetchDish();
  }, [name]);

  if (!dish) return <p>Loading...</p>;

  return (
    <div>
      <h2>{dish.name}</h2>
      <p>Ingredients: {dish.ingredients}</p>
      <p>Diet: {dish.diet}</p>
      <p>Preparation Time: {dish.prep_time}</p>
      <p>Cooking Time: {dish.cook_time}</p>
      <p>Flavor: {dish.flavor}</p>
      <p>Course: {dish.course}</p>
      <p>State: {dish.state}</p>
      <p>Region: {dish.region}</p>
    </div>
  );
};

export default DishDetails;
