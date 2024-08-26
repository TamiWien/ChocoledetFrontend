import { apiClient } from "../api/apiClient";

const getProductById = async (id) => {
    try {
        const response = await apiClient.get(`Products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

const getProducts = async () => {
    try {
        const response = await apiClient.get('Products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const createProduct = async (product) => {
    try {
        const response = await apiClient.post('Products', product);
        return response.data; // החזרת מזהה המוצר שנוצר
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export { getProductById, getProducts, createProduct };

