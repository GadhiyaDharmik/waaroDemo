import axios from "axios";

// Base API URL (Update according to your backend)
// const BASE_URL = "https://waaro.in/api";  
const BASE_URL = "http://localhost:8000/api";  

// Create an Axios instance
const axiosMain = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Timeout for requests (10s)
  headers: {
    "Content-Type": "application/json",
    // Authorization:
  },
});

// Request Interceptor
axiosMain.interceptors.request.use(
  (config) => {
    // Attach token if available (modify as needed)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosMain.interceptors.response.use(
  (response) => {
    return response.data; // Return only the data part
  },
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosMain;
