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
          <div id='navMenuFooter'>
            <div id='footerLinks'>
              {renderLink("/#about", "אודות")}
              {renderLink("/#ourBox", "הערכה שלנו")}
              {renderLink("/#recommends", "המלצות")}
              {renderLink("/#gallery", "גלריה")}
              {renderLink("/#faq", "שאלות נפוצות")}
              {renderLink("/#contact", "הזמינו סדנה")}
              <NavLink to="/store" className='footerLink'>שוקולדת ליולדת</NavLink>
              <NavLink to="/contactUs" className='footerLink'>צרו קשר</NavLink>
          </div>
          </div>
          <div className='navMenuFooter'>
            <div id='loginContainer'>
                  <NavLink ref={loginUpRef} id='loginUpBtn' onClick={toggleLogin}><FaUserCircle/></NavLink>
                  <div id='loginUser'>{loginUser}</div>
                </div>
                {isLoginVisible && <Login />}
              <div className='socialMedia'>
              </div>
                <div id='join'>JOIN US!</div>
                <div id='comp'>
                  <label className="abel">Email *</label>
                  <input name="email" type="email" id="email" />
                  <button className="email-button">Send</button>
                </div>
          </div>
      </div>
      <div id='by'>Tamar Wienet & Hadassa Sabag</div>
    </div>
  )
}

export default Footer