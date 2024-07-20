import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api', //Laravel API base URL
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
});

// Add a request interceptor
instance.interceptors.request.use(config => {
    // Modify or add any config before sending the request
    return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(response => {
    // Process response data before returning it
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;
