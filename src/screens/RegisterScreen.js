import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/auth/register`, { username, password });
            const response = await axios.post(`${API_URL}/auth/login`, { username, password });
            login(response.data.token);
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterScreen;
