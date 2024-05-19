import React from 'react';
import DogForm from '../components/DogForm';
import Navbar from "../components/Navbar";

function EditDog() {
    return (
        <div>
            <Navbar />
            <h2>Edit Dog</h2>
            <DogForm />
        </div>
    );
}

export default EditDog;
