import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import ScrollToTop from './ScrollToTop'

const Menu = () => {

    const secendMenuRef = useRef(null);

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

  return (
    <div id='menuBox'>
        <div id='menu'>
            <NavLink to="/"><img className='logoImg' src={logo} alt='logoImg' /></NavLink>
            {renderLink("/#about", "אודות")}
            {renderLink("/#ourBox", "הערכה שלנו")}
            {renderLink("/#recommends", "המלצות")}
            {renderLink("/#gallery", "גלריה")}
            {renderLink("/#faq", "שאלות נפוצות")}
            {renderLink("/#contact", "הזמינו סדנה")}
            <NavLink to="/store" id='newBorn' className={'menuLink'} onMouseOver={menuUp} onMouseOut={menuOut}>שוקולדת ליולדת
                <div id='secondMenu' ref={secendMenuRef} onMouseOut={menuOut}>
                    <NavLink to="/store/products">מוצרים מותאמים אישית </NavLink>
                    <NavLink to="/store/packages" >מארזים ייחודיים ליולדות </NavLink>
                </div>
            </NavLink>
            <NavLink to="/contactUs" className={'menuLink'}>צרו קשר</NavLink>
            <ScrollToTop />
        </div>
    </div>
  )
}

export default Menu