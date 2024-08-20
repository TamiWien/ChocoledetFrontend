import { apiClient } from "../api/apiClient";

// Fetch all users
const getAllUsers = async () => {
    try {
        const res = await apiClient.get("Users");
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Fetch a user by ID
const getUserById = async (userId) => {
    try {
        const res = await apiClient.get(`Users/${userId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Create a new user
const createUser = async (newUser) => {
    try {
        const res = await apiClient.post("Users", newUser);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Update an existing user
const updateUser = async (userId, userToUpdate) => {
    try {
        const res = await apiClient.put(`Users/${userId}`, userToUpdate);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Delete a user
const deleteUser = async (userId) => {
    try {
        await apiClient.delete(`Users/${userId}`);
    } catch (error) {
        throw error;
    }
}

export { getAllUsers, createUser, updateUser, deleteUser, getUserById }
