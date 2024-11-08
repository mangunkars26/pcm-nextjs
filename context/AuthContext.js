"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => {
        if (typeof window === "undefined") return null;
        try {
            return localStorage.getItem("authToken");
        } catch (error) {
            console.error("gagal ambil auth token", error);
            return null;
        }
    });

    const saveAuthToken = (token) => {
        try {
            localStorage.setItem("authToken", token);
            setAuthToken(token);
        } catch (error) {
            console.error("gagal simpan auth Token", error);
        }

    };

    const clearAuthToken = () => {
        try {
            localStorage.removeItem("authToken");
            setAuthToken(null);
        } catch (error) {
            console.error("Failed to clear auth token:", error);
        }
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleStorageChange = (e) => {
            if (e.key === "authToken") {
                setAuthToken(e.newValue);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const contextValue = useMemo(
        () => ({ authToken, saveAuthToken, clearAuthToken }),
        [authToken]
    );

    return (
        <AuthContext.Provider value={{ authToken, saveAuthToken, clearAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
