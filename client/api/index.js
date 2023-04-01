import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = Axios.create({
  // baseURL: "http://192.168.11.102:8000/api",
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    accpet: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
