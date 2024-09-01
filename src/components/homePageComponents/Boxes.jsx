import React from 'react'
import { FaBoxOpen, FaBuilding, FaCheck, FaEyeDropper, FaHome, FaRegMap, FaTimes, FaWarehouse } from 'react-icons/fa'
import { LuCandy } from 'react-icons/lu'
import { PiPicnicTableBold } from 'react-icons/pi'

const Boxes = () => {
  return (
    <div id='boxes'>
        <h1>בחרו את הסדנה המושלמת עבורכם</h1>
        <div id='boxesBoxes'>
            <div className='boxesBox'>
              <div className='bigIconBox'><FaHome className='bigIcon' /></div>
              <h2>בסיסית</h2>
              <p>
              הערכה הבסיסית שלנו מכילה את כל הדרוש לבניית בית שוקולד מקסים. היא מושלמת לאלו שמעדיפים עיצוב פשוט ואלגנטי.</p>
              <div className='boxesBoxName'>
                <p>
                <FaBoxOpen /> קופסא עם מגש נשלף לאריזת הבית המוכן <br/>
                <FaEyeDropper /> מזרק שוקולד להדבקה <br/>
                <FaHome /> חלקי בית משוקולד מוכנים לבנייה <br/>
                <LuCandy /> מגוון סוכריות וממתקים לקישוט <br/>
                <FaRegMap /> מדריך לבנייה קלה <br/>
                <PiPicnicTableBold /> נייר פלייסמט לשמירה על משטח נקי <br/>
                <div className='br'></div>
                <FaTimes className='red'  /> תוספת סוכריות מטאליות ומיוחדות <br/>
                <FaTimes className='red' /> צבעי גואש אכילים <br/>
                <FaTimes className='red' /> ספריי מנצנץ אכיל <br/>
                </p>
              </div>
              <h2>75 ש"ח</h2>
              <a href="#contact"><button>להזמנת אירוע</button></a>
            </div>
            <div className='boxesBox'>
              <div className='bigIconBox colorBigIcon2'><FaWarehouse className='bigIcon' /></div>
              <h2>משודרגת</h2>
              <p>
              הערכה המשודרגת מרחיבה את אפשרויות העיצוב שלכם. היא מתאימה לאלו שרוצים להעלות רמה בעיצוב הבית שלהם.</p>
              <div className='boxesBoxName'>
              <p>
                <FaBoxOpen /> קופסא עם מגש נשלף לאריזת הבית המוכן <br/>
                <FaEyeDropper /> מזרק שוקולד להדבקה <br/>
                <FaHome /> חלקי בית משוקולד מוכנים לבנייה <br/>
                <LuCandy /> מגוון סוכריות וממתקים לקישוט <br/>
                <FaRegMap /> מדריך לבנייה קלה <br/>
                <PiPicnicTableBold /> נייר פלייסמט לשמירה על משטח נקי <br/>
                <div className='br'></div>
                <FaCheck className='green'/> תוספת סוכריות מטאליות ומיוחדות <br/>
                <FaTimes className='red' /> צבעי גואש אכילים <br/>
                <FaTimes className='red'/> ספריי מנצנץ אכיל <br/>
                </p>
              </div>
              <h2>80 ש"ח</h2>
              <a href="#contact"><button>להזמנת אירוע</button></a>
            </div>
            <div className='boxesBox'>
              <div className='bigIconBox colorBigIcon3'><FaBuilding className='bigIcon' /></div>
              <h2>פרימיום</h2>
              <p>
              ערכת הפרימיום שלנו היא החוויה המלאה והעשירה ביותר. היא הבחירה המושלמת למי שרוצה ליצור יצירת מופת מרשימה ומורכבת.</p>
              <div className='boxesBoxName'>
                <p>
                  <FaBoxOpen /> קופסא עם מגש נשלף לאריזת הבית המוכן <br/>
                  <FaEyeDropper /> מזרק שוקולד להדבקה <br/>
                  <FaHome /> חלקי בית משוקולד מוכנים לבנייה <br/>
                  <LuCandy /> מגוון סוכריות וממתקים לקישוט <br/>
                  <FaRegMap /> מדריך לבנייה קלה <br/>
                  <PiPicnicTableBold /> נייר פלייסמט לשמירה על משטח נקי <br/>
                  <div className='br'></div>
                  <FaCheck className='green' /> תוספת סוכריות מטאליות ומיוחדות <br/>
                  <FaCheck className='green' /> צבעי גואש אכילים <br/>
                  <FaCheck className='green' /> ספריי מנצנץ אכיל <br/>
                </p>
              </div>
              <h2>85 ש"ח</h2>
              <a href="#contact"><button>להזמנת אירוע</button></a>
            </div>
        </div>
    </div>
  )
}

export default Boxes