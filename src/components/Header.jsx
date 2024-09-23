import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/dishes/${event.target.value}`);
        }
    };

    return (
        <header>
            <h1>Indian Cuisine Explorer</h1>
            <input
                type="text"
                placeholder="Search for a dish..."
                onKeyDown={handleSearch}
            />
        </header>
    );
};

export default Header;
