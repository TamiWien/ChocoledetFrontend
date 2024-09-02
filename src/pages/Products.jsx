import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddToCart } from '../states/cartSlice';
import { getProducts } from '../services/productsService';
import WishListButton from '../components/WishListButton';
import SideCart from '../components/SideCart';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState(null);

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

    const handleAddToCart = (product) => {
      const quantity = quantities[product.productId] || 1;
      dispatch(setAddToCart({ item: product, quantity }));
      setIsOpen(true);

      if (closeTimeout) {
          clearTimeout(closeTimeout);
      }

      const timeoutId = setTimeout(() => {
          if (!isHovered) {
              setIsOpen(false);
          }
      }, 2000);

      setCloseTimeout(timeoutId);
  };

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (isOpen) {
            const timeoutId = setTimeout(() => {
                if (!isHovered) {
                    setIsOpen(false);
                }
            }, 2000);

            setCloseTimeout(timeoutId);
        }
    };

    return (
        <div id='products'>
            <div id='productsTitleBox' className='titleBox'>
                <div id='productsTitle'>
                    <div id='productsTitleH1'><h1>מוצרים מותאמים אישית</h1></div>
                </div>
            </div>
            <div id='productsContent'>
                <div id='productsBox'>
                    {productList.filter(p => p.categoryId === 0).map((p) => (
                        <div className='productBox' key={p.productId}>
                            <div className='productBoxIn'>
                                <div className='addToWishlistBtn'>
                                    <WishListButton item={p} />
                                </div>
                                <div className='productImgBox'><img className='productImg' src={p.imagePath} alt={p.productName} /></div>
                                <div className='productName'>{p.productName}</div>
                                <div className='productPrice'>₪{p.price}</div>
                                <div className='productBtns'>
                                    <div className='productBtnsInput'>
                                        <button className='quantityInput' onClick={() => handleClickP(p.productId)}>+</button>
                                        <input className='productQuantity' type="number" placeholder='1' min="1" max="99999" step="1" value={quantities[p.productId] || 1}
                                            onChange={(e) => handleChange(p.productId, e)} />
                                        <button className='quantityInput left' onClick={() => handleClickM(p.productId)}>-</button>
                                    </div>
                                    <button className='addToCartBtn' onClick={() => handleAddToCart(p)}>הוסף לסל</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {isOpen && <SideCart setIsOpen={setIsOpen}/>}
            </div>
        </div>
    );
}

export default Products;