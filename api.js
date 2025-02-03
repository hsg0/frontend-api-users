import axios from "axios";

const API_BASE_URL = ; // Update this with your backend URL

export const getUsers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/id/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/id/${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
