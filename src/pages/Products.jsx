import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddToCart, toWishList } from '../states/cartSlice';
import { getProducts } from '../services/productsService';
import WishListButton from '../components/WishListButton';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();
    const wishList = useSelector(toWishList);

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
        </div>
    );
}

export default Products;

// import React, { useEffect, useState } from 'react';
// import { getProducts } from '../services/productsService';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAddToCart, toCart, toCartCount, toCartSum, setRemoveFromCart, setAddToWishList } from '../states/cartSlice';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import WishListButton from '../components/WishListButton';

// const Products = () => {
//   const [productList, setProductList] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   // const countCart = useSelector(toCartCount);
//   // const sumCart = useSelector(toCartSum);
//   // const arrCart = useSelector(toCart);
//   const dispatch = useDispatch();
//   // const [isHovered, setIsHovered] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const products = await getProducts();
//         setProductList(products);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (productId, e) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [productId]: newQuantity
//     }));
//   };

//   const handleClickP = (productId) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [productId]: (prevQuantities[productId] || 1) + 1
//     }));
//   };

//   const handleClickM = (productId) => {
//     setQuantities(prevQuantities => {
//       const currentQuantity = prevQuantities[productId] || 1;
//       if (currentQuantity > 1) {
//         return {
//           ...prevQuantities,
//           [productId]: currentQuantity - 1
//         };
//       }
//       return prevQuantities;
//     });
//   };

//   const handleAddToCart = (product) => {
//     const quantity = quantities[product.productId] || 1;
//     dispatch(setAddToCart({ item: product, quantity }));
//   };

//     const [wishList, setWishList] = useState(new Set()); // מצב הווישליסט, יכול להיות נתון מהשרת
//     const [itemInWishList, setItemInWishList] = useState([]);

//     const handleToggleWishList = (productId) => {
//         const updatedWishList = new Set(wishList);
//         if (updatedWishList.has(productId)) {
//             updatedWishList.delete(productId); // אם הפריט כבר בווישליסט, הסר אותו
//         } else {
//             updatedWishList.add(productId); // אם הפריט לא בווישליסט, הוסף אותו
//         }
//         setWishList(updatedWishList);
//         setItemInWishList(updatedWishList.has(productId));
//     };

//   // const handleAddToWishlist = (product) => {
//   //   dispatch(setAddToWishList(product));
//   //   setIsHovered(h => ({...h,[product.productId]:(h[product.productId])}));
//   // };

//   // const hendleIsHovered = (productId,e) => {
//   //   setIsHovered(h => ({...h,[productId]:(h[productId])
//   //   }));
//   // };


//   return (
//     <div id='products'>
//       <div id='productsTitleBox' className='titleBox'>
//         <div id='productsTitle'>
//           <div id='productsTitleH1'><h1>מוצרים מותאמים אישית</h1></div>
//         </div>
//       </div>
//       <div id='productsContent'>
//         <div id='productsBox'>
//           {productList.filter(p => p.categoryId === 0).map((p) => (
//             <div className='productBox' key={p.productId}>
//               <div className='productBoxIn'>
//                 <div className='addToWishlistBtn'>
//                   <WishListButton productId={p.productId} isInWishList={itemInWishList} onToggle={handleToggleWishList}/>
//                 </div>
//                 <div className='productImgBox'><img className='productImg' src={p.imagePath} alt={p.productName} /></div>
//                 <div className='productName'>{p.productName}</div>
//                 <div className='productPrice'>₪{p.price}</div>
//                 <div className='productBtns'>
//                   <div className='productBtnsInput'>
//                     <button className='quantityInput' onClick={() => handleClickP(p.productId)}>+</button>
//                     <input className='productQuantity' type="number" placeholder='1' min="1" max="99999" step="1" value={quantities[p.productId] || 1}
//                       onChange={(e) => handleChange(p.productId, e)}/>
//                     <button className='quantityInput left' onClick={() => handleClickM(p.productId)}>-</button>
//                   </div>
//                   <button className='addToCartBtn' onClick={() => handleAddToCart(p)}>הוסף לסל</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;
