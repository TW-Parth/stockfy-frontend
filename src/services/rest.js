import axios from 'axios';
import { toast } from 'react-toastify';
import { LOCAL_STORAGE_KEYS } from '../helpers/constant';

const AxiosInstance = axios.create({
  baseURL: 'http://192.168.1.190:3001',
});

AxiosInstance.interceptors.request.use((req) => {
  if(localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) !== null){
    req.headers = {
      ...req.headers,
      Authorization : `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)}`
    }
  }
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
