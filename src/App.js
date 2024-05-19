import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDog from './pages/AddDog';
import EditDog from './pages/EditDog';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddDog />} />
                    <Route path="/edit/:id" element={<EditDog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
