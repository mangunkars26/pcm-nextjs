import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => jwtDecode(token);

export const isTokenExpired = (token) => {
    const { exp } = decodeToken(token);
    return Date.now() >= exp * 1000;
};