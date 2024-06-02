import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddDog from './pages/AddDog';
import EditDog from './pages/EditDog';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Navbar from './components/Navbar';
import { UserProvider, UserContext } from './context/UserContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = React.useContext(UserContext);
    return user ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <UserProvider>
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<PrivateRoute element={<Home />} />} />
                        <Route path="/add" element={<PrivateRoute element={<AddDog />} />} />
                        <Route path="/edit/:id" element={<PrivateRoute element={<EditDog />} />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
