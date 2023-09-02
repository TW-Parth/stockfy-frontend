import { API_URLS } from "../helpers/constant";
import { convertJsonToFormData } from "../helpers/urils";
import AxiosInstance from "./rest";

export function getDashboardData(payload) {
    return AxiosInstance.get(API_URLS.DASHBOARD, convertJsonToFormData(payload));
}
  