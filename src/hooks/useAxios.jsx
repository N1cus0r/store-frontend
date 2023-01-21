import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:8000/",
    baseURL: "https://store-frontend.onrender.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};

export default useAxios;
