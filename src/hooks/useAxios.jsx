import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};

export default useAxios;
