import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom'
import CreditCardForm from './CreditCardForm';
import { useSelector } from 'react-redux';
import { toCart, toCartSum } from '../states/cartSlice';

const Checkout = () => {
    const [country, setCountry] = useState('');
    const [showComponent, setShowComponent] = useState(false);
    const arrCart = useSelector(toCart)
    const sumCart = useSelector(toCartSum)

  const selectCountry = (val) => {
    setCountry(val);
  };


  return (
    <div id='checkoutContant'>
        <div id='checkoutRight'><form action="#" method="POST" className='formChack'>
            <h4>פרטי לקוח</h4>           
              <label for="email"  className='labelChack'>אימייל לקבלת פרטי הזמנה *</label><br/>
              <input type="email" id="email" name="email" required/><br/><br/>

              <label for="name"  className='labelChack'>שם פרטי:</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="name"  className='labelChack'>שם משפחה:</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="name"  className='labelChack'>טלפון *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>
              
              <h4>פרטי משלוח</h4>

              <label for="name"  className='labelChack'>מדינה *</label><br/>
              <input type="country" id="name" name="name" value={country} required/>
              <CountryDropdown country={country} onChange={selectCountry}/>
              
              <label for="name"  className='labelChack'>עיר *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>
              
              <label for="name"  className='labelChack'>רחוב *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="name"  className='labelChack'>מיקוד *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="message" className='labelChack'>בקשות מיוחדות:</label><br/>
              <textarea id="message" name="message" rows="4" required></textarea><br/><br/>
              
              <Link to={'/checkout'}><button id='checkoutButton' onClick={() => setShowComponent(true)}>המשך</button></Link>
            </form> 
            <br/>
        </div>
        <div id='checkoutLeft'>
          <div id='myCartCheck'>
            <h4 className='h4'>פרטי הזמנה <Link to={'/cart'} id='edit'>ערוך סל</Link></h4> 
            {arrCart.map((p, index) => (
            <div key={index} id='productCart'>
              <div className='myCartContant'>
                <div className='productImgCartBox'><img className='productImgCart' src={p.item.imagePath} alt={p.item.productName}></img></div>
                <div className='productDataCart'>
                  <Link to={'../store/'+p.item.productName}><h5 className='h5'>{p.item.productName}</h5></Link>
                </div>
                <div className='quantityInputBox'>
                  {p.quantity}
                </div>
                <div className='itemDataCart'>
                ₪{(p.quantity * p.item.price).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
          <p className='h5'>סכום כולל: <p className='left'>₪{sumCart.toLocaleString()}</p></p>
          <p className='h5'>משלוח:<p className='left'>₪40</p> </p>
          <h4 className='h4'></h4>
          <p className='h5'>סה"כ<p className='left'>₪{(sumCart + 40).toLocaleString()}</p></p>
        </div>
        {showComponent ? <CreditCardForm /> : null}
      </div>
    </div>
  )
}

export default Checkout