// src/components/PopularPosts.jsx
import { useEffect, useState } from "react";
import api from "@/config/api";
import Link from "next/link";

export default function PopularPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularPosts = async () => {
            setLoading(true);
            try {
                const response = await api.get("/posts/popular");
                setPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching popular posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularPosts();
    }, []);

    if (loading) return <p>Loading popular posts...</p>;

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Popular Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-2">
                        <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
