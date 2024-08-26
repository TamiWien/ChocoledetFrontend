import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/productsService';

const Packages = () => {
  const [productList, setproductList] = useState([]);

  const fetchData = async () => {
    try {
        const product = await getProducts();
        setproductList(product);
        console.log(product);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

useEffect(() => {
    fetchData();
}, []);

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
              <>
                  <div className='productBox' key={p.productId}>
                    <div className='productBoxIn'>
                      <img className='productImg' src={p.imagePath} alt={p.productName} />
                      <div className='productName' >{p.productName}</div>
                      <div className='productPrice' > ₪{p.price}</div>
                      <div className='productBtns'>
                        <input className='productQuantity' type="number" min="1" max="99999" step="1" value="1"/>
                        <button className='addToCartBtn' >הוסף לסל</button>
                      </div>
                    </div>
                  </div>
              </>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Packages