import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { FaUserCircle } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  const loginUpRef = useRef(null);
  const [loginUser, setLoginUser] = useState('התחבר')
  const [isLoginVisible, setLoginVisible] = useState(false);

  const renderLink = (to, text) => {
    if (location.pathname === '/') {
      return <a href={to} className={'footerLink'}>{text}</a>;
    } else {
      return <NavLink to={to} className={'footerLink'}>{text}</NavLink>;
    }
  };

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible); 
    if(!isLoginVisible){
      document.body.style.backgroundColor = 'black';
    }
    else{
      document.body.style.backgroundColor = '';
  }
  }

  return (
    <div >
        <div id='Footer'>
          <NavLink className='navFooter' to="/"><img className='logoImgFooter' src={logo} alt='logoImg'></img></NavLink>
          <div className='navFooter footerLinks'>
            <h3>סדנת שוקולדת</h3>
            {renderLink("/#about", "אודות")}
            {renderLink("/#ourBox", "מה בערכה?")}
            {renderLink("/#recommends", "המלצות")}
            {renderLink("/#gallery", "גלריה")}
            {renderLink("/#faq", "שאלות נפוצות")}
            {renderLink("/#contact", "הזמינו סדנה")}
          </div>
          <div className='navFooter'>
              <h3>שוקולדת ליולדת</h3>
              <NavLink to="/store" className='footerLink'>חנות</NavLink>
              <NavLink to="/store/products" className='footerLink'>מוצרים מותאמים אישית</NavLink>
              <NavLink to="/store/packages" className='footerLink'>מארזים ייחודיים ליולדות</NavLink>
          </div>
          <div className='navFooter'>
              <NavLink to="/contactUs"><h3>צרו קשר</h3></NavLink>
              <a href="mailto:chocoledet@gmail.com" className='footerLinkContact'>chocoledet@gmail.com</a>
              <a href="tel:+tel:055-2100704" className='footerLinkContact'>055-2100704</a>
          </div>
      </div>
      <div id='by'>Tamar Wienet & Hadassa Sabag</div>
    </div>
  )
}

export default Footer