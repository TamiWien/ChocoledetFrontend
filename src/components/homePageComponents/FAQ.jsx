import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const FAQ = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
            <NavLink className="faq-question" onClick={onClick}>
                {question} <div className='faq-question-icon'>{isActive ? <FaMinusCircle /> : <FaPlusCircle />}</div>
            </NavLink>
            {isActive && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
    </div>
  )
}

export default FAQ