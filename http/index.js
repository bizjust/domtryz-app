import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
const API_URL = Constants.manifest.extra.api_url;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// List of all endpoints//loginMobile
export const getCountries = (data) => api.get("/countries", data);
export const getLoggedInUser = (data) => api.get("/user", data);
export const stepEmailPassword = (data) => api.post("/stepEmailPassword", data);
export const verifyUser = (data) => api.get("/verifyUser", data);
export const addPhrase = (data) => api.post("/addPhrase", data);
export const logout = (data) => api.get("/logout", data);
export const loginWithEmail = (data) => api.post("/login", data);
export const loginMobile = (data) => api.post("/loginMobile", data);

// Set the AUTH token for any request
api.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Interceptors
api.interceptors.response.use(
  async (config) => {
    // console.log('ok',config.data);
    const { data } = config;
    if (data.token) {
      const token = await AsyncStorage.setItem("token", data.token);
    }
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (typeof error.response === "undefined") {
      // do somthing
      // console.log("ok");
      return Promise.reject(error);
    }
    // console.log('e',error.response);
    // return;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        // console.log('ok');
        const token = await AsyncStorage.getItem("token");
        await AsyncStorage.setItem("token", data.token);
        return api.request(originalRequest);
      } catch (err) {
        console.log("refresh", err.message);
      }
    }
    return Promise.reject(error);
    // throw error;
  }
);

export default api;
