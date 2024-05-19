import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';


function DogForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5001/dogs/${id}`)
                .then(response => {
                    setName(response.data.name);
                    setBreed(response.data.breed);
                    setAge(response.data.age);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dog = { name, breed, age };

        if (id) {
            axios.patch(`${API_URL}/dogs/${id}`, dog)
                .then(() => navigate('/'))
                .catch(error => console.error("Error updating dog", error));
        } else {
            axios.post(`${API_URL}/dogs`, dog)
                .then(() => navigate('/'))
                .catch(error => console.error("Error adding dog", error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Breed</label>
                <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
            </div>
            <div>
                <label>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default DogForm;
