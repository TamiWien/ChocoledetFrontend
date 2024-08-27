import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessSignUp = ({ isVisible }) => {
  
  const handleLinkClick = () => {
    window.location.reload(); // טוען מחדש את כל הדף
  };

  return (
    <div id='successSignUp' className={`successSignUp ${isVisible ? 'visible' : 'hidden'}`}>
        <h3 >איזה כיף! נרשמת בהצלחה</h3>
        <p>שנתחיל להזמין?</p>
        
        <p><NavLink to='/Store' onClick={handleLinkClick}>כנס לחנות</NavLink></p>
    </div>
  )
}

export default SuccessSignUp