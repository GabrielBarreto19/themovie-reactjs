import axios from 'axios';

const api = axios.create({
  baseURL: 'hhttps://api.themoviedb.org',
})

export default api;
