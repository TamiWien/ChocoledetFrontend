import React, { useState } from 'react';
import { setAddToCart, toWishList } from '../states/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import WishListButton from '../components/WishListButton';

const WishList = () => {
  const arrWishList = useSelector(toWishList);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();

  console.log(arrWishList);

  const handleChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: newQuantity
    }));
};

const handleClickP = (productId) => {
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: (prevQuantities[productId] || 1) + 1
    }));
};

const handleClickM = (productId) => {
    setQuantities(prevQuantities => {
        const currentQuantity = prevQuantities[productId] || 1;
        if (currentQuantity > 1) {
            return {
                ...prevQuantities,
                [productId]: currentQuantity - 1
            };
        }
        return prevQuantities;
    });
};

const handleAddToCart = (product) => {
    const quantity = quantities[product.productId] || 1;
    dispatch(setAddToCart({ item: product, quantity }));
};

  return (
    <div id='wishlist'>
      <div id='productsTitleBox' className='titleBox'>
        <div id='wishlistTitle'>
          <div id='wishlistTitleH1'><h1>רשימת משאלות</h1></div>
        </div>
      </div>
      <div id='wishlistContent'>
        <div id='wishlistProductsBox'>
          {arrWishList.map((p) => (
            <div className='wishlistProductBox' key={p.item.productId}>
              <div className='productBoxIn'>
                  <div className='addToWishlistBtn'>
                      <WishListButton item={p.item} />
                  </div>
                  <div className='productImgBox'><img className='productImg' src={p.item.imagePath} alt={p.item.productName} /></div>
                  <div className='productName'>{p.item.productName}</div>
                  <div className='productPrice'>₪{p.item.price}</div>
                  <div className='productBtns'>
                      <div className='productBtnsInput'>
                          <button className='quantityInput' onClick={() => handleClickP(p.item.productId)}>+</button>
                          <input className='productQuantity' type="number" placeholder='1' min="1" max="99999" step="1" value={quantities[p.item.productId] || 1}
                              onChange={(e) => handleChange(p.item.productId, e)} />
                          <button className='quantityInput left' onClick={() => handleClickM(p.item.productId)}>-</button>
                      </div>
                      <button className='addToCartBtn' onClick={() => handleAddToCart(p.item)}>הוסף לסל</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishList;
