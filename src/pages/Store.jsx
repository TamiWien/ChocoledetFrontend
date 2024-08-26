import React, { useState } from 'react'
import cPackages from '../assets/images/cPackages.jpg';
import cProducts from '../assets/images/cProducts.jpg';
import { NavLink } from 'react-router-dom';

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
      <div>
        <div id='storeTitleBox' className='titleBox'>
          <div id='storeTitle'>
              <h1>שוקולדת ליולדת</h1>
              <h2>מתנות מתוקות לתינוק וליולדת</h2>
              <p>
              ברוכים הבאים לעמוד שוקולדת ליולדת! 
              כאן תוכלו למצוא מגוון מתנות מתוקות ומיוחדות עבור יולדות ותינוקות, 
              שנארוז באהבה ונשלח אליכם או ישירות אל היולדת.

              בעמוד זה תוכלו לעיין בכל המוצרים והערכות שלנו. 
              כל פריט נבחר בקפידה כדי להבטיח שיולדת ותינוק יקבלו את הטוב ביותר – בטעם ובאיכות. 
              גללו מטה כדי לראות את כל האפשרויות ולבחור את המתנה המושלמת.
              </p>
          </div>
        </div>
        <div id='storeCategorys'>
          <NavLink to="/store/packages" ><div id='productsCategorys' className='storeCategorys'>
            <img className='categoryImg' src={cPackages} alt='categoryImg' />
            <h2>מארזים ייחודיים ליולדות</h2>
            <p>חסכנו לכם זמן יקר וארזנו כבר את הפריטים הכי נכונים ליולדת שלכם. בחרו את המארז המושלם בקלות ובמהירות</p>
          </div></NavLink>
          <NavLink to="/store/products" ><div id='packagesCategorys' className='storeCategorys'>
            <img className='categoryImg' src={cProducts} alt='categoryImg' />
            <h2>מוצרים מותאמים אישית</h2>
            <p>בחרו את המוצרים האהובים עבור היולדת שלכם ונכין לה מארז מפנק שאי אפשר להישאר אדיש מולו</p>
          </div></NavLink>
        </div>
        <div id='storeContent'>
            <button>כל המוצרים</button>
        </div>
    </div>
      
  )
}

export default Store

{/* Store
      <div>
        <Link className='list' onClick={() => productsList.ToList()}><h5>All Product</h5></Link>
      </div> */}