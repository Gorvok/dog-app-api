import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';


function DogList() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/dogs`)
            .then(response => setDogs(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteDog = (id) => {
        axios.delete(`http://localhost:5001/dogs/${id}`)
            .then(() => {

                setDogs(dogs.filter(dog => dog._id !== id));
            })
            .catch(error => console.error('Error deleting dog:', error));
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
}

export default DogList;
