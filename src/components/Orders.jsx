import { useEffect, useState } from "react";
import { getProductById } from "../services/productsService";

const Orders = ({ orders = [] }) => {
  const [itemProducts, setItemProducts] = useState({});

  const fetchProductDetails = async (productId) => {
    try {
      const product = await getProductById(productId);
      setItemProducts(prevState => ({
        ...prevState,
        [productId]: product
      }));
      console.log(itemProducts);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    const productIds = orders.flatMap(order =>
      order.orderItems.map(item => item.productId)
    );

    const uniqueProductIds = [...new Set(productIds)];

    uniqueProductIds.forEach(productId => {
      if (!itemProducts[productId]) {
        fetchProductDetails(productId);
      }
    });
  }, [orders]);

  const getLastSixDigits = (text) => {
    if (text.length < 6) {
      return text; 
    }
    return text.slice(-6);
  };

  return (   
    <div id="orders">
      <h2>הזמנות</h2>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order.orderId} className="order">
            <p>מספר הזמנה: {getLastSixDigits(order.orderId)}</p>
            <p>תאריך: {new Date(order.orderDate).toLocaleDateString()}</p> 
            <p>סטטוס תשלום: {order.paymentStatus ? 'שולם' : 'לא שולם'}</p> 
            <p>סה"כ: {order.totalAmount} ש"ח</p>
            {order.orderItems && order.orderItems.length > 0 && (
              <div>
                <h3>פריטי הזמנה:</h3>
                {order.orderItems.map(item => (
                  <div key={item.orderItemId} >
                    {itemProducts[item.productId] && (
                      <div className="item">
                        <p className="detailsItem">
                          <img className='detailsItemImg' src={itemProducts[item.productId].imagePath} alt={itemProducts[item.productId].imagePath} />
                        </p>
                        <p className="detailsItem">שם מוצר: {itemProducts[item.productId].productName}</p>
                        <p className="detailsItem">כמות: {item.quantity}</p>
                        <p className="detailsItem">מזהה מוצר: {getLastSixDigits(item.productId)}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>אין הזמנות להציג</p>
      )}
    </div>
  );
};

export default Orders;

// import { useEffect, useState } from "react";
// import { getProductById } from "../services/productsService";

// const Orders = ({ orders = [] }) => {
//   console.log("Orders Data:", orders);

//   const [itemProducts, setItemProducts] = useState({});

//   const fetchData = async () => {
//     try {
//       const productPromises = orders.flatMap(order =>
//         order.orderItems.map(item => getProductById(item.productId))
//       );
      
//       const products = await Promise.all(productPromises);

//       const productMap = products.reduce((map, product) => {
//         map[product.productId] = product;
//         return map;
//       }, {});

//       setItemProducts(productMap);

//       console.log("Products:", productMap);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [orders]);

//   return (
//     <div id="orders">
//       <h2>הזמנות</h2>
//       {orders.length > 0 ? (
//         orders.map(order => (
//           <div key={order.orderId} className="order">
//             <p>מספר הזמנה: {order.orderId}</p>
//             <p>תאריך: {new Date(order.orderDate).toLocaleDateString()}</p>
//             <p>סטטוס תשלום: {order.paymentStatus ? 'שולם' : 'לא שולם'}</p>
//             <p>סה"כ: {order.totalAmount} ש"ח</p>
//             {order.orderItems && order.orderItems.length > 0 && (
//               <div>
//                 <h3>פריטי הזמנה:</h3>
//                 {order.orderItems.map(item => {
//                   const product = itemProducts[item.productId] || {};
//                   return (
//                     <div key={item.orderItemId} className="item">
//                       <p className="detailsItem">
//                         <img className='detailsItemImg' src={product.imagePath} alt={product.productName} />
//                         {product.imagePath}
//                       </p>
//                       <p className="detailsItem">שם מוצר: {product.productName}</p>
//                       <p className="detailsItem">כמות: {item.quantity}</p>
//                       <p className="detailsItem">מזהה מוצר: {item.productId}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>אין הזמנות להציג</p>
//       )}
//     </div>
//   );
// };

// export default Orders;

// import { useEffect, useState } from "react";
// import { getProductById } from "../services/productsService";

// const Orders = ({ orders = [] }) => {
//   console.log("Orders Data:", orders);

//   const [itemProduct, setItemProduct] = useState([]);
   
//   const fetchData = async () => {
//       try {
//           const product = await getProductById(orders.orderItems.productId);
//           console.log(product);
//           setItemProduct(product);  
//           console.log(itemProduct);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// };

// useEffect(() => {
//     fetchData();
// },  [orders]);

//   return (   
//     <div id="orders">
//       <h2>הזמנות</h2>
//       {orders.length > 0 ? (
//         orders.map(order => (
//           <div key={order.orderId} className="order">
//             <p>מספר הזמנה: {order.orderId}</p>
//             <p>תאריך: {new Date(order.orderDate).toLocaleDateString()}</p> 
//             <p>סטטוס תשלום: {order.paymentStatus ? 'שולם' : 'לא שולם'}</p> 
//             <p>סה"כ: {order.totalAmount} ש"ח</p>
//             {order.orderItems && order.orderItems.length > 0 && (
//               <div>
//                 <h3>פריטי הזמנה:</h3>
//                 {order.orderItems.map(item => (
//                   <div key={item.orderItemId} className="item">
//                     <p className="detailsItem"> <img className='detailsItemImg' src={itemProduct.imagePath} alt={itemProduct.imagePath}>{itemProduct.imagePath}</img></p>
//                     <p className="detailsItem">שם מוצר: {itemProduct.productName}</p>
//                     <p className="detailsItem">כמות: {item.quantity}</p>
//                     <p className="detailsItem">מזהה מוצר: {item.productId}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>אין הזמנות להציג</p>
//       )}
//     </div>
//   );
// };

// export default Orders;

