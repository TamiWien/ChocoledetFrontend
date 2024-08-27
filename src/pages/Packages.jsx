import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productsService';
import { useDispatch, useSelector } from 'react-redux';
import { setAddToCart, toCart, toCartCount, toCartSum, setRemoveFromCart } from '../states/cartSlice';

const Packages = () => {
  const [productList, setProductList] = useState([]);
  const [quantities, setQuantities] = useState({});
  const countCart = useSelector(toCartCount);
  const sumCart = useSelector(toCartSum);
  const arrCart = useSelector(toCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProductList(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

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

  const handleClick = (product) => {
    const quantity = quantities[product.productId] || 1;
    dispatch(setAddToCart({ item: product, quantity }));
  };

  return (
    <div id='packages'>
        <div id='packagesTitleBox' className='titleBox'>
          <div id='packagesTitle'>
              <div id='packagesTitleH1'><h1>מארזים ייחודיים ליולדות</h1></div>
          </div>
        </div>
        <div id='packagesContent'>
        <div id='productsBox'>
          {productList.filter(p => p.categoryId === 1).map((p) => (
            <div className='productBox' key={p.productId}>
              <div className='productBoxIn'>
                <div className='productImgBox'><img className='productImg' src={p.imagePath} alt={p.productName} /></div>
                <div className='productName'>{p.productName}</div>
                <div className='productPrice'>₪{p.price}</div>
                <div className='productBtns'>
                  <div className='productBtnsInput'>
                    <button className='quantityInput' onClick={() => handleClickP(p.productId)}>+</button>
                    <input className='productQuantity' type="number" placeholder='1' min="1" max="99999" step="1" value={quantities[p.productId] || 1}
                      onChange={(e) => handleChange(p.productId, e)}
                    />
                    <button className='quantityInput left' onClick={() => handleClickM(p.productId)}>-</button>
                  </div>
                  <button className='addToCartBtn' onClick={() => handleClick(p)}>הוסף לסל</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Packages