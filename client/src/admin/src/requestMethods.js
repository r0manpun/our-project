import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const rootPersist = localStorage.getItem("persist:root");
const currentUser = JSON.parse(JSON.parse(rootPersist)?.user)?.currentUser;
const TOKEN = currentUser?.accessToken ?? '';


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
