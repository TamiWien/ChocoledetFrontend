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

const createOrder = async (newOrder) => {
    try {
        const res = await apiClient.post("Orders", newOrder);
        return res.data; 
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export { getOrdersByUserId, createOrder };
