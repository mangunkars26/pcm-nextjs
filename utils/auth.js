import api from '@/config/axios';
import { decodeToken } from './jwt';


export const login = async (credentials) => {
    const {data} = await api.post("/auth/login", credentials);
    localStorage.setItem("token", data.token);
    return decodeToken(data.token);
};

export const logout = () => {
    localStorage.removeItem("token");
};