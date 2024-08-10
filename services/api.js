import axios from "axios";

//export const BASE_URL = "http://localhost:6060";
export const BASE_URL = "http://13.127.108.60:6060";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
