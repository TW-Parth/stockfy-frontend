import { API_URLS } from "../../helpers/constant";
import { convertJsonToFormData } from "../../helpers/urils";
import AxiosInstance from "../rest";

export function login(payload){
    return AxiosInstance.post(API_URLS.LOGIN , convertJsonToFormData(payload))
}