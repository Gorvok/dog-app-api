import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const DogList = () => {
    const [dogs, setDogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await axiosInstance.get('/dogs');
                setDogs(response.data);
            } catch (error) {
                console.error('Error fetching dogs:', error);
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchDogs();
    }, [navigate]);

    const deleteDog = async (id) => {
        try {
            await axiosInstance.delete(`/dogs/${id}`);
            setDogs(dogs.filter(dog => dog._id !== id));
        } catch (error) {
            console.error('Error deleting dog:', error);
        }
    };

    return (
        <div>
            <h2>Dog List</h2>
            <ul>
                {dogs.map(dog => (
                    <li key={dog._id}>
                        <Link to={`/edit/${dog._id}`}>{dog.name}</Link>
                        <button onClick={() => deleteDog(dog._id)} style={{ marginLeft: '10px', color: 'red' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DogList;
