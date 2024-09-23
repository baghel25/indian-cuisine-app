import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DishPage from './pages/DishPage';
import Login from './components/Login';

const App = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <Router>
            {user ? <Header user={user} onLogout={handleLogout} /> : null}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                {/* Protected Route */}
                <Route path="/dishes/:dishId" element={user ? <DishWrapper /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

const DishWrapper = () => {
    const { dishId } = useParams();
    return <DishPage dishId={dishId} />;
};

export default App;
