// app/api/api.ts

import axios from "axios";

export const api = axios.create({
  baseURL: "https://next-docs-api.onrender.com",
  withCredentials: true,
});
