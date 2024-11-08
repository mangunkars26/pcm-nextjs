// src/utils/auth.js
import api from '@/config/api';

export const login = async (credentials) => {
    try {
        const { data } = await api.post('/auth/login', credentials);
        localStorage.setItem('authToken', data.token); // Simpan token di localStorage
        return data.user; // Mengembalikan data user jika diperlukan
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    window.location.href = '/login';
};

export const isLoggedIn = () => {
    return !!localStorage.getItem('authToken'); // Cek apakah token ada di localStorage
};