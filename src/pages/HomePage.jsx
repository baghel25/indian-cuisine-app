import React from 'react';
import DishList from '../components/DishList';
import DishSuggester from '../components/DishSuggester';

const HomePage = () => {
    return (
        <div>
            <DishSuggester />
            <DishList />
        </div>
    );
};

export default HomePage;
