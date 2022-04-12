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

const api_token = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// List of all endpoints Without authorization bearer token
export const getCountries = (data) => api.get("countries", data);
export const stepEmailPassword = (data) => api.post("stepEmailPassword", data);
export const loginWithEmail = (data) => api.post("login", data);
export const loginMobile = (data) => api.post("loginMobile", data);


// List of all endpoints with authorization bearer token
export const verifyUser = (data) => api_token.post("verifyUser", data);
export const getLoggedInUser = (data) => api_token.get("user", data);
export const addPhrase = (data) => api_token.post("addPhrase", data);
export const logout = (data) => api_token.get("logout", data);


// Set the AUTH token for any request
api_token.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem("token");
  // console.log("token", token);
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);



// Interceptors
api_token.interceptors.response.use(
  (response) => { // Any status code from range of 2xx
    // Do something with response data
    return response;
  },
  (error) => { // Any status codes outside range of 2xx
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
