// /components/ArticleList.js
import { useEffect, useState } from 'react';
import api from '../utils/api';

const ArticleList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchPosts = async (page) => {
        setLoading(true);
        try {
            const response = await api.get(`/posts?page=${page}&limit=10`);
            setPosts(response.data.data.data || []);
            setTotalPages(response.data.data.total_pages || 1);
            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Gagal ambil posts');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    return (
        <section className="container mx-auto my-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Artikel Terbaru</h2>
            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                        <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ArticleList;
