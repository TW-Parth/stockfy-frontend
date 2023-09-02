import AxiosInstance from "../rest";

export function login(){
    return AxiosInstance.get('/posts')
}