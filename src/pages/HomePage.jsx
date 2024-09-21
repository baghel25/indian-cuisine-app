// frontend/src/pages/HomePage.jsx
import React from 'react';
import DishList from '../components/DishList';
import DishSuggester from '../components/DishSuggester';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Indian Cuisine Explorer</h1>
      <DishSuggester />
      <DishList />
    </div>
  );
};

export default HomePage;
