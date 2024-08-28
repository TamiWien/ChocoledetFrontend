import { apiClient } from "../api/apiClient";

const getOrdersByUserId = async (userId) => {
    try {
        const res = await apiClient.get(`Orders/${userId}`);
        return res.data; 
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

const createOrder = async (orderData) => {
    console.log('Creating order with data:', orderData);
  
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData), // המרת אובייקט ל-JSON
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const result = await response.json();
    return result.orderId; // החזרת ה-ID של ההזמנה
  };

  
// const createOrder = async (newOrder) => {
//     try {
//         const res = await apiClient.post("Orders", newOrder);
//         return res.data; 
//     } catch (error) {
//         console.error('Error creating order:', error);
//         throw error;
//     }
// };

export { getOrdersByUserId, createOrder };
