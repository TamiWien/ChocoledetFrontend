import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { FaBabyCarriage, FaChevronCircleUp } from 'react-icons/fa';
import { GoHeart } from 'react-icons/go';
import { PiShoppingCartSimple, PiUser } from 'react-icons/pi';
import SignUp from './SignUp';
import { IoCloseOutline } from 'react-icons/io5';
import ScrollToTop from './ScrollToTop';
import { getAllUsers, loginUser } from '../services/usersService';

const Menu = () => {
  const secendMenuRef = useRef(null);
  const loginUpRef = useRef(null);
  const [loginUserName, setLoginUserrName] = useState('התחבר');///////////////////////we are here
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userList, setuserList] = useState([]);
  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      console.log('Fetched נכנסתי:', users);
        const users = await getAllUsers();
        console.log('Fetched users:', users); // הדפסת המשתמשים שהתקבלו
        setuserList(users);
    } catch (error) {
        console.error('Error fetching users:', error); // הדפסת השגיאה עם פרטים
    }
};

useEffect(() => {
    fetchData();
}, []);

  // const fetchData = async () =>{
  //   try {
  //     const users = await getAllUsers();
  //     setuserList(users);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   }

  // useEffect (() =>{
  //   fetchData()
  // },[] )

  const handleLogin = async () => {
    try {
        console.log('before Email:', email);
        console.log('before Password:', password);

        const response = await loginUser(email, password);
        console.log('Server response:', response);

        if (response === "Login successful") {
          console.log("נכנסתי");
          console.log("userList:" + userList);
            const user = userList.find(u => u.Email === email);
            console.log(user);
            if (user) {
                setLoginUserrName(user.UserName); // עדכון שם המשתמש
            }
            setIsOpen(!isOpen);
            navigate('/store');
        } else if (response === "Invalid email") {
            setError('אופפס עדיין לא נרשמת');
        } else if (response === "Invalid password") {
            setError('סיסמתך לא נכונה');
        } else if (response === "Username and password are required.") {
            setError('אנא מלא את הפרטים');
        } else {
            setError(response);
        }
    } catch (err) {
        console.error('Login error:', err);
        setError('שגיאת התחברות');
    }
};

    // פונקציה מטפלת בגלילה למקום בעמוד מתוכו ומחוצה לו - התחלה
    const location = useLocation(); 
  
    const renderLink = (to, text) => {
      if (location.pathname === '/') {
        return <a href={to} className={'menuLink'} onClick={scrollToSection}>{text}</a>;
      } else {
        return <NavLink to={to} className={'menuLink'} onClick={scrollToSection}>{text}</NavLink>;
      }
    };
    // פונקציה מטפלת בגלילה למקום בעמוד מתוכו ומחוצה לו - סוף

    const scrollToSection = () => {
      const section = document.getElementById("mySection");
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleClick = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

    const menuUp = () => {
        if (secendMenuRef.current) {
            secendMenuRef.current.style.display = 'block';
          }
    }
    const menuOut = () => {
        if (secendMenuRef.current) {
        secendMenuRef.current.style.display = 'none';
        }
    }
  
    const toggleClose = () => {
      setIsOpen (!isOpen)
    }

    const toggleSignUp = () => {
      setSignUpVisible(!isSignUpVisible);
      setIsLogin (!isLogin)
    }

  return (
    <div id='menuBox'>
        <div id='menu'>
          <div id='menuLogo'><NavLink to="/" onClick={handleClick}><img className='logoImg' src={logo} alt='logoImg' /></NavLink></div>
          <div id='menuLinks'>
            {renderLink("/#about", "אודות")}
            {renderLink("/#ourBox", "מה בערכה?")}
            {renderLink("/#recommends", "המלצות")}
            {renderLink("/#gallery", "גלריה")}
            {renderLink("/#faq", "שאלות נפוצות")}
            {renderLink("/#contact", "הזמינו סדנה")}
            <NavLink to="/store" id='newBorn' className={'menuLink'} onMouseOver={menuUp} onMouseOut={menuOut}><div id='secondMenuNB'><FaBabyCarriage /> <br/>שוקולדת ליולדת </div>
                <div id='secondMenu' ref={secendMenuRef} onMouseOut={menuOut}>
                    <NavLink to="/store/products" className='secondMenuLinks'>מוצרים מותאמים אישית </NavLink>
                    <NavLink to="/store/packages" className='secondMenuLinks'>מארזים ייחודיים ליולדות </NavLink>
                </div>
            </NavLink>
            <NavLink to="/contactUs" className={'menuLink'}>צרו קשר</NavLink>
            <div id='menuIcons'>
                <div className='menuIcon'>
                  <NavLink to="/store"><GoHeart/></NavLink>
                </div>
                <div className='menuIcon'>
                  <NavLink to="/store"><PiShoppingCartSimple/></NavLink>
                </div>
                <div id='loginContainer' className='menuIcon'>
                  <NavLink ref={loginUpRef} id='loginUpBtn' onClick={toggleClose}><PiUser/></NavLink>
                  <div id='loginUser'>{loginUserName}</div>
                </div>
            </div>
          </div>
        </div>
        {isOpen && <div>
          <div id='darkBody'> </div>
          <div className="login-container">
            <div id="overlay" className="overlay"></div>
          <NavLink onClick={toggleClose}><IoCloseOutline /></NavLink>
          {isLogin && <div>
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
          </div>
          }
          <p>עוד לא הצטרפתם לקהילה שלנו? בואו להיות חלק &gt;&gt; <NavLink onClick={toggleSignUp}><b>הירשמו כאן</b></NavLink></p>
          {isSignUpVisible && <SignUp setIsOpen={setIsOpen}/>}
          </div>
        </div>
        } 
      <NavLink to="#up" id='toUp' onClick={handleClick}><FaChevronCircleUp /></NavLink>
      <ScrollToTop/>
    </div>
  )
}

export default Menu