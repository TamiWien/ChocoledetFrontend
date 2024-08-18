import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiClient } from '../api/apiClient'; // Adjust import path as needed
import { IoCloseOutline } from 'react-icons/io5';
// import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await apiClient.post('Auth/Login', { email, password }); // Adjust endpoint as needed
      navigate('/dashboard'); // Redirect on successful login
    } catch (err) {
      setError('Login failed');
    }
  };

  const toggleOpen = () => {
    setIsOpen (!isOpen)
  }

  return (
    <>
    {isOpen && <div className="login-container">
       <NavLink onClick={toggleOpen}><IoCloseOutline /></NavLink>
      <h2>התחברות</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>} 
    </>
  );
};

export default Login;
