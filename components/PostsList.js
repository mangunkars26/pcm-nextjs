"use client";

import { useEffect, useState } from "react";
import api from '@/config/api';
import LoadingDots from "./LoadingDots";
import PostGrid from "./wrapper/PostGrid";

const PostsList = ({
    limit=10,
    categories=[],
    showPagination=true,
    onError=null,
    onPostsFetched=null,
}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchPosts = async (page) => {
        console.log("Fetched Posts:", posts); // Debugging di PostsList

        setLoading(true);
        try {
            // Construct category query if categories are provided
            const categoryQuery = categories.length ? `&categories=${categories.join(",")}` : "";
    
            // Make the API request
            const response = await api.get(`/posts?page=${page}&limit=${limit}${categoryQuery}`);
    
            // Log the full response for debugging
            console.log("Full API Response:", response.data);
    
            // Check if the fetch was successful
            if (response.data.success) {
                // Log the posts data for debugging
                console.log("Fetched Posts Data:", response.data.data.data);
    
                // Set posts and total pages
                setPosts(response.data.data.data || []);
                setTotalPages(response.data.data.last_page || 1);
            } else {
                // Handle the case where the API responds with success: false
                throw new Error(response.data.message || "Fetch failed with no specific message.");
            }
    
            // Call the optional callback if provided
            if (onPostsFetched) {
                onPostsFetched(response.data.data.data);
            }
        } catch (err) {
            // Enhanced error logging
            console.error("Fetch error:", err);
    
            // Extract error message from the response or set a default message
            const errorMessage = err.response?.data?.message || "Gagal fetch posts";
            setError(errorMessage);
        } finally {
            // Ensure loading is set to false regardless of success or error
            setLoading(false);
        }
    };
    
    

    useEffect(() => {
        fetchPosts(currentPage);
        
    }, [currentPage, categories, limit]);

    const handlePreviousPage = () => {
        if (currentPage > 1 ) {
            setCurrentPage((prevPage) => prevPage - 1 );
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages ) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };


    return (
        <div className="container mx-auto p-4">
            {loading ? (
                <LoadingDots />
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    {/* daftar posts */}
                    <PostGrid posts={posts} />

                        {showPagination && (
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                                    >
                                        Prev
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="px-4 pt-2 bg-gray-300 rounded disabled:opacity-50">
                                    Next
                                </button>

                             </div>
                        )}
                </>
            )}
        </div>
    );
}

export default PostsList;