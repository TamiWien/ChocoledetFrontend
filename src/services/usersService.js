import { apiClient } from "../api/apiClient";

const getAllUsers = async () => {
    try {
        const res = await apiClient.get("Users");
        return res.data; 
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getUserById = async (userId) => {
    try {
        const res = await apiClient.get(`Users/${userId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const createUser = async (newUser) => {
    try {
        const res = await apiClient.post("Users", newUser);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const updateUser = async (userId, userToUpdate) => {
    try {
        const res = await apiClient.put(`Users/${userId}`, userToUpdate);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async (userId) => {
    try {
        await apiClient.delete(`Users/${userId}`);
        console.log("עובד");
    } catch (error) {
        throw error;
    }
}

const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post(`Users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
        return response.data; 
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export { getAllUsers, createUser, updateUser, deleteUser, getUserById, loginUser }
