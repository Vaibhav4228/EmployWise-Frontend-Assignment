import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const fetchUsers = async (page) => {
  const response = await axios.get(`${API_URL}/users?page=${page}`);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};
export const edilteUser = async (id) => {
  const response = await axios.post(`${API_URL}/users/${id}`);
  return response.data;
};
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};
export const updateUser = async (id, userData) => {
  const response = await  axios.put(`${API_URL}/users/${id}`, userData);
  return response.data;
};
