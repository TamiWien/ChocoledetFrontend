// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { IoCloseOutline } from 'react-icons/io5';
// import { loginUser } from '../services/usersService';

// const Login = ({toggleSingUp}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isOpen, setIsOpen] = useState(true);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//         console.log('Login button clicked');
//         await loginUser({ email, password });
//         navigate('/store');
//     } catch (err) {
//         console.log('after Email:', email);
//         console.log('after Password:', password);
//         setError('שגיאת התחברות');
//     }
// };

//   // const handleLogin = async () => {
//   //   try {
//   //     console.log('before Email:', email);
//   //     console.log('before Password:', password);
//   //     await apiClient.post('Users/login', { email, password }); 
//   //     navigate('/store'); 
//   //   } catch (err) {
//   //     console.log('after Email:', email);
//   //     console.log('after Password:', password);
//   //     setError('שגיאת התחברות');
//   //   }
//   // };

//   const toggleClose = () => {
//     setIsOpen (!isOpen)
//   }

//   return (
//     <>
//     {isOpen && <div>
//       <div id='darkBody'> </div>
//       <div className="login-container">
//         <div id="overlay" className="overlay"></div>
//        <NavLink onClick={toggleClose}><IoCloseOutline /></NavLink>
//       <h2>התחברות</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p className="error-message">{error}</p>}
//       <button onClick={handleSignUp}>Sign Up</button>
//       <p>עוד לא הצטרפתם לקהילה שלנו? בואו להיות חלק &gt;&gt; <NavLink onClick={toggleSingUp}><b>הירשמו כאן</b></NavLink></p>
//     </div>
//     </div>
    
//     } 
//     </>
//   );
// };

// export default Login;
