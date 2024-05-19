import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add" style={{ marginLeft: '10px' }}>Add Dog</Link>
        </nav>
    );
}

export default Navbar;
