import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

export const placeOrder = (orderData) => {
  return axios.post(`${API_URL}/place`, orderData);
};

export const getAllOrders = () => {
  return axios.get(`${API_URL}/admin/all`);
};
