import React from 'react';
import DogForm from '../components/DogForm';
import Navbar from "../components/Navbar";

function AddDog() {
    return (
        <div>
            <Navbar />
            <h2>Add a New Dog</h2>
            <DogForm />
        </div>
    );
}

export default AddDog;
