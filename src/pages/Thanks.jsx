import React from 'react'
import { FaArrowLeft, FaRegCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div id='thanks'>
    <FaRegCheckCircle className='faRegCheckCircle'  id='top'/>
    <div id='thanksTitle'>תודה על הזמנתך!
      <p>פרטי ההזמנה נמצאים אצלך במייל 🙂</p>
    </div>

    <Link id='backHome' to={'/'}>חזור לדף הבית<FaArrowLeft /> </Link> 

    </div>
  )
}

export default Thanks