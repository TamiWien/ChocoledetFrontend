import React, { useState } from 'react'
import getAllProducts from '../services/products';

const Store = () => {

  // const fetchData = async () =>{

  //   const [productsList, setProductsList] = useState([]);

  //   try {
  //     const products = await getAllProducts();
  //     setProductsList(products);
  //   } catch (error) {
  //     console.log(error.massage);
  //   }
  // }

  // useEffect (() =>{
  //   fetchData()
  // },[] )

  return (
    <div id='store' className='titleBox'>
      Store
      <div>
        {/* <Link className='list' onClick={() => productsList.ToList()}><h5>All Product</h5></Link> */}
      </div>
    </div>
  )
}

export default Store