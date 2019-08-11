import axios from 'axios';

export const apiKey = '022aec9d947611913e6fb76d15dd7438';

export const apiClient =  axios.create({baseURL:'https://api.themoviedb.org/3'});