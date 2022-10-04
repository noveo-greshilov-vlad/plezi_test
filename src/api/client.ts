import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL,
  timeout: 1000,
  params: {
    api_key: apiKey
  }
});
