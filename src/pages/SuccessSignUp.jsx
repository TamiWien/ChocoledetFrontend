import React from 'react'
import { NavLink } from 'react-router-dom'
import Store from './Store'

const SuccessSignUp = () => {
  return (
    <div>
        <p id='successSignUp'>איזה כיף! נרשמת בהצלחה</p>
        <NavLink to='/Store'>שנתחיל להזמין? כנס לחנות</NavLink>
        <p></p>
    </div>
  )
}

export default SuccessSignUp