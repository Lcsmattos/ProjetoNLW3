import axios from 'axios';

const api = axios.create ({
  // Lembrar de sempre ver o ip no site do expo!
  baseURL: 'http://192.168.5.192:3333',
})

export default api;