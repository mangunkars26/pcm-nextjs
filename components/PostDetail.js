// components/PostDetail.js
"use client";

import { useEffect, useState } from "react";
import api from "@/config/api";

export default function PostDetail({ slug }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Slug berubah atau data ter-update:", slug, data);
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/posts/${slug}`);
                if (response.status === 200 && response.data?.data) {
                    setData(response.data.data);  // Simpan data langsung dari API
                } else {
                    setError("Data tidak ditemukan.");
                }
            } catch (err) {
                setError("Gagal mengambil data.");
            } finally {
                setLoading(false);
            }
        };
        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {data?.featured_image && (
                <img
                    src={data.featured_image}
                    alt={data.title}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )}
            <h1 className="text-4xl font-bold text-gray-800 mt-4">{data?.title}</h1>
            <div className="text-sm text-gray-500 mt-2">
                <p>By {data?.user?.name} on {new Date(data?.created_at).toLocaleDateString()}</p>
                <p>Category: {data?.category?.name}</p>
            </div>
            <div className="mt-6 text-gray-700">
                <p>{data?.body}</p>
            </div>
        </div>
    );
}
