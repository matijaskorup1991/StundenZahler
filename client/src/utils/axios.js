import axios from 'axios';

const config = axios.create({
  baseURL: 'http://localhost:5000',
});

export default config;
