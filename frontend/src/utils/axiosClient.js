const axios = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:8888",
});

export const setToken = (token) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axiosClient.interceptors.request.use((config) => {
  if (localStorage.getItem('userInfo')) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
  }
  return config;
});

export default axiosClient;
