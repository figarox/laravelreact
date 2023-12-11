import axios from "axios";
import router from "./Router/route";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/app",
});

axiosClient.interceptors.request.use((config) => {
  const token = "123";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      router.navigate("/");
      return error;
    }
    throw error;
  }
);

export default axiosClient;
