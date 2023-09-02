import axios from 'axios';
import { toast } from 'react-toastify';

const AxiosInstance = axios.create({
  baseURL: 'http://192.168.1.190:3001',
});

AxiosInstance.interceptors.request.use((req) => {
  return req;
});

AxiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    toast.error(error?.response?.data?.message || 'Something went wrong!');
  },
);

export default AxiosInstance;
