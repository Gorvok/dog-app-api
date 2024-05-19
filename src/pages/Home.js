import React from 'react';
import DogList from '../components/DogList';
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Dog Management App</h1>
            <DogList />
        </div>
    );
}

export default Home;
