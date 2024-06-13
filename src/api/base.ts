import axios from 'axios';
// config
import { API_URL } from '../utils/config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;