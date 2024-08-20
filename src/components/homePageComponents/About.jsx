import React from 'react'
import homesplash from '../../assets/images/homesplash.svg'
import logoMin from '../../assets/images/logoMin.svg'
import { FaChildReaching } from 'react-icons/fa6'

const About = () => {
  return (
    <div id='about'>
        <h1>סדנה להכנת בתים משוקולד</h1>
        <div>
            <div id='aboutLeft'>
                <img id='homesplash' src={homesplash} alt='homesplashimg' />
            </div>
            <div id='aboutRight'>
                <img id='logoMin' src={logoMin} alt='logoMinimg' />
                <p>
                הפעלה מתוקה, מלאה יצירתיות, כיף וחוויה<br/>
                מוגשת בצורה אסטטית ונקיה<br/>
                עם כל האביזרים לבניית בתים מתוקים במיוחד<br/>
                עשויים משוקולד משובח ומקושטים, באווירה טובה עם כל החברים<br/>
                </p>
                <botton id='aboutBtn'>להזמנת אירוע</botton>
            </div>
        </div>
        <div id='aboutInfo'>
            <div className='aboutInfo'>
                <div className='aboutInfoTitle'>
                    <h2>גילאים</h2>
                    <FaChildReaching/>
                </div>
                <p>99 – 6</p>
            </div>
            <div className='aboutInfo'>
                <div className='aboutInfoTitle'>
                    <h2>משלוחים</h2>
                </div>
                <p>הערכות נשלחות אליכם עד הבית</p>
            </div>
            <div className='aboutInfo'>
                <div className='aboutInfoTitle'>
                    <h2>הזמנות</h2>
                </div>
                <p>עד שבוע לפני האירוע
                מומלץ להזמין חודש מראש</p>
            </div>
            <div className='aboutInfo'>
                <div className='aboutInfoTitle'>
                    <h2>מינימום הזמנה</h2>
                </div>
                <p>10 ערכות</p>
            </div>
        </div>
    </div>
  )
}

export default About