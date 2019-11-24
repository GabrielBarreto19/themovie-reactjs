import axios from 'axios';

const token = 'cc586edfff730870f0169b310acda186';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {'Authorization': 'Bearer '+token}
})

export default api;
