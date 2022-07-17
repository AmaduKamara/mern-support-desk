import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // If there is a user data from the response, store to localStorage in the browser
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  // Return user data so they're accessible
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  // If there is a user data from the response, store to localStorage in the browser
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  // Return user data so they're accessible
  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem("user");

// Export the services from this file as authService - that is then accessible as authService.something
const authService = {
  register,
  logout,
  login,
};

export default authService;
