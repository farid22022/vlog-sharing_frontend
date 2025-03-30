import { jwtDecode } from "jwt-decode";
import { USER_JWT } from "../../config.json";

interface CustomJWT {
    user_id: string,
    exp: number,
    is_staff: boolean,
    is_active: boolean,
    name: string,
    phone: string,
}

interface LoginData {
    refresh: string,
    access: string
}


export function isUserAuthenticated() {
    try {
        const token = getUserJwtToken()
        if (!token) throw new Error('User Token Not Found')

        const decodedToken = jwtDecode<CustomJWT>(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) throw new Error("Your session has expired, please sign in again!")
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}



export function userLogin(data: LoginData) {
    localStorage.setItem(USER_JWT, data.access)
}
export function userLogout() {
    localStorage.removeItem(USER_JWT)
}
export function getUserJwtToken() {
    return localStorage.getItem(USER_JWT)
}


export function getUser() {
    const user_jwt = localStorage.getItem(USER_JWT)
    if (user_jwt) {
        const decoded = jwtDecode<CustomJWT>(user_jwt)
        return {
            ...decoded,
            is_staff: Boolean(decoded.is_staff),
            is_active: Boolean(decoded.is_active),
            user_id: Number(decoded.user_id),              
            exp: Number(decoded.exp),            
        };
    }

    return null
}