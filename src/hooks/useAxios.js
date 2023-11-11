// axiosHook.js
import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      //const authToken = localStorage.getItem("authToken");
      // if (authToken) {
      //   config.headers["Authorization"] = `Bearer ${authToken}`;
      // }
      config.headers["Authorization"] = `Bearer Mehedi's Token`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access or refresh token here
        // For simplicity, you can redirect to login page
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
