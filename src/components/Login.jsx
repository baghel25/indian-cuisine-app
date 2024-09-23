import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            navigate('/'); // Redirect to the home page if logged in
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation for username and password
        if (username && password) {
            // Normally validate the login (e.g., check against a database)
            const userData = { username };
            onLogin(userData); // Call the onLogin function passed as a prop

            // Redirect to the home page after login
            navigate('/');
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
