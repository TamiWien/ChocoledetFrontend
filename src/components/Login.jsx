import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiClient } from '../api/apiClient'; 
import { IoCloseOutline } from 'react-icons/io5';

const Login = ({toggleSingUp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await apiClient.post('Users/login', { email, password }); 
      navigate('/store'); 
    } catch (err) {
      setError('שגיאת התחברות');
    }
  };

  const toggleClose = () => {
    setIsOpen (!isOpen)
    if(!isOpen){
      // var element = document.getElementById('darkBody');
      // element.style.display = 'block';
    }
    else{
      // element.style.display = 'none';
    }
  }

  return (
    <>
    {isOpen && <div>
      <div id='darkBody'> </div>
      <div className="login-container">
        <div id="overlay" className="overlay"></div>
       <NavLink onClick={toggleClose}><IoCloseOutline /></NavLink>
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
      <p>עוד לא הצטרפתם לקהילה שלנו? בואו להיות חלק &gt;&gt; <NavLink onClick={toggleSingUp}><b>הירשמו כאן</b></NavLink></p>
    </div>
    </div>
    
    } 
    </>
  );
};

export default Login;
