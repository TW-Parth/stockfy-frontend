import { API_URLS } from '../../helpers/constant';
import AxiosInstance from '../rest';

export function getWebhookConfig() {
  return AxiosInstance.get(API_URLS.GET_WEBHOOK);
}

export function handleFile(payload) {
  return AxiosInstance.post(API_URLS.FILE_UPLOAD, payload);
}
