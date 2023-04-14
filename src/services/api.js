import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
  },
})

export default api;