import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const http = axios.create({
  baseURL,
});

export default http;