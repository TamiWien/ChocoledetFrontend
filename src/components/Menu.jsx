import React, { useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import ScrollToTop from './ScrollToTop'
import Login from '../pages/LogIn';
import { FaUserCircle } from 'react-icons/fa';

const Menu = () => {

    const secendMenuRef = useRef(null);
    const loginUpRef = useRef(null);
    const [loginUser, setLoginUser] = useState('התחבר')
    const [isLoginVisible, setLoginVisible] = useState(false);

    // פונקציה מטפלת בגלילה למקום בעמוד מתוכו ומחוצה לו - התחלה
    const location = useLocation(); 
  
    const renderLink = (to, text) => {
      if (location.pathname === '/') {
        return <a href={to} className={'menuLink'}>{text}</a>;
      } else {
        return <NavLink to={to} className={'menuLink'}>{text}</NavLink>;
      }
    };
    // פונקציה מטפלת בגלילה למקום בעמוד מתוכו ומחוצה לו - סוף

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

    const loginUpS = () => {
      if (loginUpRef.current) {
        loginUpRef.current.style.display = 'block';
        }
    }

    const toggleLogin = () => {
      setLoginVisible(!isLoginVisible); 
    }
  // const loginOut = () => {
  //   if (secendMenuRef.current) {
  //   secendMenuRef.current.style.display = 'none';
  //   }
  // }

  return (
    <div id='menuBox'>
        <div id='menu'>
          <div id='menuLogo'><NavLink to="/"><img className='logoImg' src={logo} alt='logoImg' /></NavLink></div>
          <div id='menuLinks'>
            {renderLink("/#about", "אודות")}
            {renderLink("/#ourBox", "הערכה שלנו")}
            {renderLink("/#recommends", "המלצות")}
            {renderLink("/#gallery", "גלריה")}
            {renderLink("/#faq", "שאלות נפוצות")}
            {renderLink("/#contact", "הזמינו סדנה")}
            <NavLink to="/store" id='newBorn' className={'menuLink'} onMouseOver={menuUp} onMouseOut={menuOut}>שוקולדת ליולדת
                <div id='secondMenu' ref={secendMenuRef} onMouseOut={menuOut}>
                    <NavLink to="/store/products" className='secondMenuLinks'>מוצרים מותאמים אישית </NavLink>
                    <NavLink to="/store/packages" className='secondMenuLinks'>מארזים ייחודיים ליולדות </NavLink>
                </div>
            </NavLink>
            <NavLink to="/contactUs" className={'menuLink'}>צרו קשר</NavLink>
            <div id='loginContainer'>
              <NavLink ref={loginUpRef} id='loginUpBtn' onClick={toggleLogin}><FaUserCircle/></NavLink>
              <div id='loginUser'>{loginUser}</div>
            </div>
            {isLoginVisible && <Login />}
            <ScrollToTop />
          </div>
        </div>
    </div>
  )
}

export default Menu