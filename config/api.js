import axios from 'axios';


// const baseURL = process.env.NEXT_PUBLIC_API_URL_PROD; // Production URL
const baseURL = process.env.NEXT_PUBLIC_API_URL_DEV;    // Development URL

const api = axios.create({
    baseURL
});

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//             console.log("Token add to req:", token);
//         } else {
//             console.log("Tiada token di localstorage");
//         }
//         return config;
//     },
//     (error) => {
//         console.error("request error:", error);
//         return Promise.reject(error);
//     }

// );

api.interceptors.response.use(
    (response) => {
        response.data = response.data?.data || response.data;
        return response;
    },
    (error) => {
        console.error("response error:". error.response?.status, error.response?.data);
        if (error.response?.status === 403) {
            console.warn("403 Forbissen - Cek tokwn atau permision");
        }
        return Promise.reject(error);
    }
);

export default api;
