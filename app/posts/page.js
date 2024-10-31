"use client";

import { useEffect, useState } from "react";
import api from '@/config/axios';
import PostCard from "@/components/PostCard";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchPosts = async (page) => {
        setLoading(true);
        try {
            const response = await api.get(`/posts?page=${page}&limit=10`);
            setPosts(response.data.data);
            setTotalPages(response.data.total_pages);
            setLoading(false);
        } catch (error) {
            setError('Gagal ambil posts', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1 ) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages ) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Posts
            </h1>
            {loading ? (
                <p>Loading posts ...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>

                    {/* Navigasi Paginasi */}
                    <div className=" flex justify-center mt-6">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                    </div>
                </>
            )}
        </div>
    );
}