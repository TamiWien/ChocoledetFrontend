import React, { useEffect, useState } from 'react'
import { setAddToCart, setRemoveFromCart, toCart, toCartSum } from '../states/cartSlice'
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

const SideCart = ({setIsOpen}) => {
    
    const sumCart = useSelector(toCartSum);
    const arrCart = useSelector(toCart);
    const dispatch = useDispatch();

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

    const handleClose = () => {
        setIsOpen (false);
      };

    return (
        <div id='sideCartContant'>
            <div id='sideCartTitle'><h2 className='h4'>סל קניות</h2></div>
            <button id='sideCartBtn' onClick={handleClose}><IoIosArrowBack /></button>
            <div id='sideCart'>
                {arrCart.map((p, index) => (
                    <div key={index} id='productCart'>
                        <div className='myCartContant'>
                            <div className='sideCartProductImgCartBox'><img className='productImgCart' src={p.item.imagePath} alt={p.item.productName}></img></div>
                            <div className='sideCartProductDataCart'>
                                <Link to={'../store/'+p.item.productName}><h5 className='h5'>{p.item.productName}</h5></Link>
                                <p className='itemDataCart'>₪{p.item.price}</p>
                            </div>
                            <div className='quantityInputBox'>
                                <button className='quantityInputCart' onClick={() => handleClickM(p.item.productId)}>-</button>
                                {p.quantity}
                                <button className='quantityInputCart' onClick={() => handleClickP(p.item.productId)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id='sideCartOrderSummary'>
                <p className='h5'>סה"כ<p className='left'>₪{(sumCart + 40).toLocaleString()}</p></p>
            </div>
            <button id='sideCartButton'><Link to='/cart'>עבור לסל הקניות</Link></button>
        </div>
    )
}

export default SideCart;