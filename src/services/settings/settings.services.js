import { API_URLS } from '../../helpers/constant';
import { AxiosInstance } from '../rest';

export function getWebhookConfig() {
  return AxiosInstance.get(API_URLS.GET_WEBHOOK);
}
