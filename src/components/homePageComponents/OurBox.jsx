import React from 'react'
import box from '../../assets/images/box.png'
import { FaBoxOpen, FaCheckCircle, FaGift, FaHome, FaRegMap } from 'react-icons/fa'
import { GiWrappedSweet } from 'react-icons/gi'
import { PiPenFill } from 'react-icons/pi'

const OurBox = () => {
  return (
    <div id='ourBox'>
        <h1>תכולת ערכה</h1>
        <div id='ourBoxContainer'>
          <div id='ourBoxText'>
            <div className="flex-container">
              <div className="item item1">
                <div className="itemIcon">
                  <FaHome/>
                </div>
                <p>חלקי בית משוקולד מוכנים לבנייה</p>
              </div>
              <div className="item item2">
                <div className="itemIcon">
                  <GiWrappedSweet/>
                </div>
                <p>מגוון סוכריות וממתקים לקישוט</p>
              </div>
              <div className="item item3">
                <div className="itemIcon">
                  <PiPenFill/>
                </div>
                <p>מזרק שוקולד + מזרק דבק אכיל</p>
              </div>
              <div className="item item4">
                <div className="itemIcon">
                  <FaBoxOpen/>
                </div>
                <p>קופסא עם מגש נשלף לאריזת הבית המוכן</p>
              </div>
              <div className="item item5">
                <div className="itemIcon">
                  <FaRegMap/>
                </div>
                <p>מדריך לבנייה קלה</p>
              </div>
              <div className="item item6">
                <div className="itemIcon">
                  <FaGift/>
                </div>
                <p>נייר פלייסמט לשמירה על משטח נקי</p>
              </div>
            </div>
            <div className="allItems">
                <div className="itemIconButton">
                  <p> <FaCheckCircle /> הערכה כוללת הכל לבניית בית שוקולד מושלם אין צורך בתוספות </p>
                  <p> <FaCheckCircle /> כל המוצרים פרווה בהשגחת בד”ץ העדה”ח  </p>
                </div>
              </div>
          </div>
          <div id='ourBoxImg'>
            <img className='ourBoxImg' src={box} alt='ourBoxImg' />
          </div>
        </div>
    </div>
  )
}

export default OurBox