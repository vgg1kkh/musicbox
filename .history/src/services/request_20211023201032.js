import axios from "axios"
import { BASE_URL, TIMEOUT } from "./configs"
import NProgress from 'nprogress'
import NProgress from 'n'
import 'nprogress/nprogress.css'

export const instance = axios.create({
    //Default Setting
    baseURL:BASE_URL,
    timeout:TIMEOUT,
    withCredentials:true,
    headers:{}
})