"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/config/api";
import { useAuth } from "@/context/AuthContext";


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();


  const { authToken, saveAuthToken } = useAuth();

   // Cek jika sudah login saat komponen dimount
    useEffect(() => {
      if (authToken) {
        console.log(" Anda berhasil logjn");
        router.push('/admin');
      }
    }, [authToken, router]);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/auth/login', { email, password });
      saveAuthToken(data.token);
      setLoading(false);
      router.push('/admin'); // Redirect on success
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password.");
      } else if (error.response && error.response.status === 500) {
        setError("Server error. Please try again later.");
      } else {
        setError("Login failed. Please check your network connection.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Login</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center border border-red-300">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${
            loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}