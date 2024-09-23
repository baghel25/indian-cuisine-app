// frontend/src/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchDishes = () => {
  console.log('Fetched dish data:', response.data);

  return axios.get(`${API_BASE_URL}/api/dishes`);
};

export const fetchDishByName = (name) => {
  return axios.get(`${API_BASE_URL}/api/dishes/${name}`);
};

export const suggestDishes = (ingredients) => {
  return axios.post(`${API_BASE_URL}/api/dishes/suggest`, { ingredients });
};
