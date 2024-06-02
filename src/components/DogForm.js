import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import { UserContext } from '../context/UserContext';

function DogForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (id) {
            axiosInstance.get(`/dogs/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
                .then(response => {
                    setName(response.data.name);
                    setBreed(response.data.breed);
                    setAge(response.data.age);
                })
                .catch(error => console.error(error));
        }
    }, [id, user.token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dog = { name, breed, age };

        if (id) {
            axiosInstance.patch(`/dogs/${id}`, dog, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
                .then(() => navigate('/'))
                .catch(error => console.error("Error updating dog", error));
        } else {
            axiosInstance.post('/dogs', dog, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
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
