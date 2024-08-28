import React from 'react'
import { FaReply } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id='p404'>
      <h1>404</h1>
      <h2>אופסס! עמוד זה לא נמצא  😔</h2>
        <h3>
          נראה שמה שחיפשת נעלם כמו שוקולד שנספג במים חמים – פשוט נמס!  <br/>
          אל דאגה, אפשר למצוא את מה שאתה מחפש במקומות אחרים באתר שלנו:<br/>
          <Link to="../" className='bold'>דף הבית –  </Link> כדי להתחיל מחדש.<br/>
          <Link to="../#about" className='bold'>סדנאות שוקולד – </Link>  למידע על הסדנאות שלנו ולתיאום השתתפות.<br/>
          <Link to="../store" className='bold'>מוצרים ליולדות –  </Link>  לגלות את המוצרים המיוחדים שלנו ליולדות ולתינוקות.<br/>
          <Link to="../contactUs" className='bold'>צור קשר – </Link>  אם יש לך שאלות או אם אתה צריך עזרה נוספת.<br/>
          אם אתה נתקל בבעיה או צריך עזרה, אל תהסס לפנות אלינו. אנו כאן כדי לעזור!<br/>
          תודה על ביקורך, ומקווים שתמצא את מה שחיפשת בקרוב! 🍫👶 <br/>
        <br/>
        <br/><br/>
        <Link to="../" id='goBack404'><FaReply /></Link>  
        </h3>  
        <br/><br/>  
      </div>
  )
}

export default NotFound