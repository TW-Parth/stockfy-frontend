import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

AxiosInstance.interceptors.request.use( req => {
  return req;
});

AxiosInstance.interceptors.response.use( res => {
    return res.data;
});

export default AxiosInstance;