// frontend/src/components/Header.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const { data } = await axios.get(`/api/dishes/search?query=${value}`);
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search dishes..."
        value={query}
        onChange={handleSearch}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <Link to={`/dish/${suggestion.name}`}>{suggestion.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
