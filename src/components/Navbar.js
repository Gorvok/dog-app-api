import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Navbar() {
    const { user, logout } = useContext(UserContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <Link to="/add" style={{ marginLeft: '10px' }}>Add Dog</Link>
                    <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" style={{ marginLeft: '10px' }}>Login</Link>
                    <Link to="/register" style={{ marginLeft: '10px' }}>Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
