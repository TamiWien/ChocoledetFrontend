import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUser } from '../services/usersService';

const SignUp = ({setIsOpen}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  
  const handleSignUp = async () => {
    try {
      console.log('Start sign up process');
    await createUser({ userName, email, password });
    console.log('User created, navigating to success page');
    setIsVisible(!isVisible);
  } catch (err) {
    console.error('Error during sign up:', err);
    setError('ההרשמה נכשלה');
    }
  };

  const handleLinkClick = () => {
    navigate('/successSignup'); 
    setIsOpen (false);
  };

  return (
    <div className="signup-container">
      <h2>הרשמה</h2>
      <input
        type="text"
        placeholder="שם משתמש"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="אימייל"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="סיסמה"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleSignUp}>הירשם</button>
      <div id='successSignUp' className={`successSignUp ${isVisible ? 'visible' : 'hidden'}`}>
        <h3 >איזה כיף! נרשמת בהצלחה</h3>
        <p>שנתחיל להזמין?</p>       
        <p><NavLink to='/Store' onClick={handleLinkClick}>כנס לחנות</NavLink></p>
      </div>
    </div>
  );
};

export default SignUp;
