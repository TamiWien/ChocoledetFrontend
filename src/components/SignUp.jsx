import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/usersService';

const SignUp = ({setIsOpen}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const successRef = useRef();
  const navigate = useNavigate();

  
  const handleSignUp = async () => {
    try {
      console.log('Start sign up process');
    await createUser({ userName, email, password });
    console.log('User created, navigating to success page');
    navigate('/successSignup'); 
    setIsOpen (false);
    // successRef.current.style.display = 'block';
    //loginUserName(userName);
  } catch (err) {
    console.error('Error during sign up:', err);
    setError('ההרשמה נכשלה');
    }
  };

  // const handleSignUp = async () => {
  //   try {
  //     await createUser({ userName, email, password });
  //     navigate('/successSignup'); 
  //     successRef.current.style.display = 'block';
  //     loginUserName(userName);
  //   } catch (err) {
  //     setError('ההרשמה נכשלה');
  //   }
  // };

  return (
    <div className="signup-container">
      <h2>הרשמה</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
