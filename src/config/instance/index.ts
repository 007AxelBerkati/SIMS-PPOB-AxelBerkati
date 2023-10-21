import axios from 'axios';
import {store} from '../../redux';

const headers = {};

const instance = axios.create({
  baseURL: 'https://take-home-test-api.nutech-integrasi.app',
  timeout: 3000,
  headers,
});

instance.interceptors.request.use(
  config => {
    const {token} = store.getState().auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
