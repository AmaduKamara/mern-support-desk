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

// Export the services from this file as authService - that is then accessible as authService.something
const authService = {
  register,
};

export default authService;
