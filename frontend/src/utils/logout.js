// src/utils/logout.js

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('user');

  // Optional: Remove the default header too
  delete window.axios?.defaults?.headers?.common?.Authorization;

  // Or if you used your `api` instance:
  // import api from '../services/api'
  // delete api.defaults.headers.common['Authorization'];

  // Redirect to login page
  window.location.href = '/';
};
