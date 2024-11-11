// "use client";

import React, { useState } from 'react';
import Pagination from './Pagination';
import useFetch from '@/hooks/useFetch';
import LoadingDots from './LoadingDots';
import PostGrid from './wrapper/PostGrid';

export default function PostsList() {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('created_at');
    const [order, setOrder] = useState('desc');
    const [currentPage, setCurrentPage] = useState(1);
    
    const params = {
        page: currentPage,
        sort_by: sortBy,
        order,
        ...(search.trim() !== '' && { search }),
    };

    console.log("Params:", params); // Cek params yang dikirim
const { data, loading, error } = useFetch('/posts', params, [currentPage, search, sortBy, order]);

    // Debugging logs
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);

    // Check if data exists before mapping
    const posts = data?.data?.map(post => ({
        ...post,
        authorName: post.user?.name,
        categoryName: post.categories?.name,
    })) || [];

    const totalPages = data?.total_pages || 1;

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded-lg mr-2"
                />
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border p-2 rounded-lg mr-2"
                >
                    <option value="created_at">Date</option>
                    <option value="title">Title</option>
                </select>
                <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    className="border p-2 rounded-lg"
                >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>
            {loading ? (
                <LoadingDots />
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <PostGrid posts={data} />
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
