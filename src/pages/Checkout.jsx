import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import { Link, useLocation } from 'react-router-dom'
import CreditCardForm from './CreditCardForm';
import { useSelector } from 'react-redux';
import { toCart, toCartSum } from '../states/cartSlice';

const Checkout = () => {
    const [country, setCountry] = useState('');
    const [showComponent, setShowComponent] = useState(false);
    const arrCart = useSelector(toCart);
    const sumCart = useSelector(toCartSum);

    const selectCountry = (val) => {
        setCountry(val);
    };

    const location = useLocation();
    const orderItems = location.state?.orderItems || []; 

    console.log(orderItems);  
    console.log(sumCart); 
    
    const createOrderItemsArray = () => {
      return arrCart.map(p => ({
        productId: p.item.productId,
        quantity: p.quantity
      }));
    };
    const orderItemsArray = createOrderItemsArray();
    
    const handleCheckout = () => {
        setShowComponent(true);
        console.log(orderItems);
        navigate('/creditCardForm', { state: { orderItems: orderItemsArray} });
    };

    return (
        <div id='checkoutContant'>
            <div id='checkoutRight'>
                <form action="#" method="POST" className='formChack'>
                    <h4>פרטי לקוח</h4>
                    <label htmlFor="email" className='labelChack'>אימייל לקבלת פרטי הזמנה *</label><br/>
                    <input type="email" id="email" name="email" required/><br/><br/>

                    <label htmlFor="name" className='labelChack'>שם פרטי:</label><br/>
                    <input type="text" id="name" name="name" required/><br/><br/>

                    <label htmlFor="lastName" className='labelChack'>שם משפחה:</label><br/>
                    <input type="text" id="lastName" name="lastName" required/><br/><br/>

                    <label htmlFor="phone" className='labelChack'>טלפון *</label><br/>
                    <input type="text" id="phone" name="phone" required/><br/><br/>
                    
                    <h4>פרטי משלוח</h4>
                    <label htmlFor="country" className='labelChack'>מדינה *</label><br/>
                    <input type="country" id="country" name="country" value={country} required/>
                    <CountryDropdown country={country} onChange={selectCountry}/>
                    
                    <label htmlFor="city" className='labelChack'>עיר *</label><br/>
                    <input type="text" id="city" name="city" required/><br/><br/>
                    
                    <label htmlFor="street" className='labelChack'>רחוב *</label><br/>
                    <input type="text" id="street" name="street" required/><br/><br/>
                    <label htmlFor="zipcode" className='labelChack'>מיקוד *</label><br/>
                    <input type="text" id="zipcode" name="zipcode" required/><br/><br/>

                    <label htmlFor="message" className='labelChack'>בקשות מיוחדות:</label><br/>
                    <textarea id="message" name="message" rows="4" required></textarea><br/><br/>
                    
                     <button id='checkoutButton' onClick={handleCheckout}>המשך</button>
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
                {showComponent ? <CreditCardForm totalAmount = {sumCart}/> : null}
            </div>
        </div>
    )
}

export default Checkout;