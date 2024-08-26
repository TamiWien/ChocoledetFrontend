import React, { useEffect, useState } from 'react'
import { setAddToCart, setRemoveFromCart, toCart, toCartSum } from '../states/cartSlice'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    
    const sumCart = useSelector(toCartSum);
    console.log(sumCart);
    console.log(typeof sumCart); // ודא שזה מספר
    console.log(typeof (sumCart + 40)); 
    const arrCart = useSelector(toCart);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState();
    const [productsList, setProductsList] = useState([])

  const fetchData = async () =>{
    try {
      const products = await getProducts();
      setProductsList(products)
    } catch (error) {
      console.log(error.massage)
    }
    }

  useEffect (() =>{
    fetchData()
  },[] )

  const handleClickP = (itemName) => {
    const foundItem = productsList.find(item => item.name === itemName);
    if (foundItem) {
      setQuantity(quantity + 1);
      dispatch(setAddToCart({ item: foundItem, quantity: 1 }));
    }
  };
  
  const handleClickM = (itemName) => {
    const foundItem = arrCart.find(item => item.item.name === itemName);
    if (foundItem) {
        if (foundItem.quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            dispatch(setAddToCart({ item: foundItem.item, quantity: -1 }));
        } else {
            dispatch(setRemoveFromCart({ name: foundItem.item.name }));
        }
    }
};

  return (
    <div className='boxContant'>
      <div className='contant'>
        <div id='myCart'>
          <h4 className='h4'>הסל שלי</h4>
          {arrCart.map((p, index) => (
            <div key={index} id='productCart'>
              <div id='myCartContant'>
                <img id='productImgCart' src={p.item.imagePath} alt={p.item.productName}></img>
                <div id='productDataCart'>
                  <Link to={'../store/'+p.item.productName}><h5 className='h5'>{p.item.productName}</h5></Link>
                  <p className='itemDataCart'>מחיר:  ₪{p.item.price}</p>
                </div>
                <div id='productDataCart'>
                  <Link to={'../store/'+p.item.productName}><h5 className='h5'>{p.item.productName}</h5></Link>
                  <p className='itemDataCart'>{p.item.productName}</p>
                </div>
                <div id='quantityInputBox'>
                  <button className='quantityInput' onClick={() => handleClickM(p.item.productName)}>-</button>
                  {p.quantity}
                  <button className='quantityInput' onClick={() => handleClickP(p.item.productName)}>+</button>
                </div>
                <div className='itemDataCart'>
                ₪{(p.quantity * p.item.price).toLocaleString()}
                </div>
                <div className='itemDataCart'>
                <button className='quantityInputX' onClick={() => dispatch(setRemoveFromCart({ name: p.item.productName }))}><FaTrashAlt /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id='orderSummary'>
          <h4 className='h4'>הזמנה</h4>
          <p className='h5'>סכום כולל: ₪{sumCart}</p>
          <p className='h5'>משלוח: ₪40</p>
          <h4 className='h4'></h4>
          <p className='h5'>סה"כ ₪{(sumCart + 40).toLocaleString()}</p>
          <Link to={sumCart> 0 ? '/checkout' : ''}><button id='checkoutButton' >לתשלום</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart