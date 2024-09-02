import React, { useEffect, useState } from 'react'
import { setAddToCart, setRemoveFromCart, toCart, toCartSum } from '../states/cartSlice'
import { FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { getProducts } from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    
    const sumCart = useSelector(toCartSum);
    const arrCart = useSelector(toCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState();
    const [productsList, setProductsList] = useState([])

    const fetchData = async () =>{
        try {
            const products = await getProducts();
            setProductsList(products)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleClickP = (productId) => {
        const foundItem = productsList.find(item => item.productId === productId);
        if (foundItem) {
            setQuantity(quantity + 1);
            dispatch(setAddToCart({ item: foundItem, quantity: 1 }));
        }
    };
  
    const handleClickM = (productId) => {
        const foundItem = arrCart.find(item => item.item.productId === productId);
        if (foundItem) {
            if (foundItem.quantity > 1) {
                setQuantity(prevQuantity => prevQuantity - 1);
                dispatch(setAddToCart({ item: foundItem.item, quantity: -1 }));
            } else {
                dispatch(setRemoveFromCart({ productName: foundItem.item.productName }));
            }
        }
    };

    const createOrderItemsArray = () => {
        return arrCart.map(p => ({
            productId: p.item.productId,
            quantity: p.quantity
        }));
    };

    const orderItems = createOrderItemsArray();

    const handleCheckout = () => {
        navigate('/checkout', { state: { orderItems } });
    };

    return (
        <div className='boxContant'>
            <div className='contant'>
                <div id='myCart'>
                    <h4 className='h4'>הסל שלי</h4>
                    {arrCart.map((p, index) => (
                        <div key={index} id='productCart'>
                            <div className='myCartContant'>
                                <div className='productImgCartBox'><img className='productImgCart' src={p.item.imagePath} alt={p.item.productName}></img></div>
                                <div className='productDataCart'>
                                    <Link to={'../store/'+p.item.productName}><h5 className='h5'>{p.item.productName}</h5></Link>
                                    <p className='itemDataCart'>₪{p.item.price}</p>
                                </div>
                                <div className='quantityInputBox'>
                                    <button className='quantityInputCart' onClick={() => handleClickM(p.item.productId)}>-</button>
                                    {p.quantity}
                                    <button className='quantityInputCart' onClick={() => handleClickP(p.item.productId)}>+</button>
                                </div>
                                <div className='itemDataCart'>
                                    ₪{(p.quantity * p.item.price).toLocaleString()}
                                </div>
                                <div className='itemDataCart'>
                                    <button className='quantityInputX' onClick={() => dispatch(setRemoveFromCart({ productName: p.item.productName }))}><FaTrashAlt /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id='orderSummary'>
                    <h4 className='h4'>הזמנה</h4>
                    <p className='h5'>סכום כולל: <p className='left'>₪{sumCart.toLocaleString()}</p></p>
                    <p className='h5'>משלוח:<p className='left'>₪40</p> </p>
                    <h4 className='h4'></h4>
                    <p className='h5'>סה"כ<p className='left'>₪{(sumCart + 40).toLocaleString()}</p></p>
                    <button id='checkoutButton' onClick={handleCheckout}>לתשלום</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;