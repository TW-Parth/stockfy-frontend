import { API_URLS } from '../../helpers/constant';
import { convertJsonToFormData } from '../../helpers/urils';
import AxiosInstance from '../rest';

export function login(payload) {
  return AxiosInstance.post(API_URLS.LOGIN, convertJsonToFormData(payload));
}

export function signUp(payload) {
  return AxiosInstance.post(API_URLS.SIGNUP, convertJsonToFormData(payload));
}

export function getProfile(payload) {
  return AxiosInstance.get(API_URLS.GET_PROFILE, convertJsonToFormData(payload));
}

export function updateProfile(payload) {
  return AxiosInstance.put(API_URLS.UPDATE_PROFILE, convertJsonToFormData(payload));
}

export function logout() {
  localStorage.clear;
  return AxiosInstance.post(API_URLS.LOGOUT);
}
