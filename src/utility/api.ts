import axios from "axios";
import { getUserJwtToken, isUserAuthenticated } from "./auth";
import Config from '../../config.json';


const userApi = axios.create({
    baseURL: `http://${location.hostname}:${Config.BE_PORT}`,
    timeout: Config.REQUEST_TIMEOUT,
})

userApi.interceptors.request.use(
    (config) => {
        const token = getUserJwtToken()
        config.headers['Content-Type'] = 'application/json; charset=UTF-8'
        if (isUserAuthenticated()) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export { userApi }