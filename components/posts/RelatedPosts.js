// src/components/RelatedPosts.jsx
import { useEffect, useState } from "react";
import api from "@/config/api";
import Link from "next/link";

export default function RelatedPosts({ categoryId }) {
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRelatedPosts = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/posts/related?category_id=${categoryId}`);
                setRelatedPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching related posts:", error);
            } finally {
                setLoading(false);
            }
        };

        if (categoryId) fetchRelatedPosts();
    }, [categoryId]);

    if (loading) return <p>Loading related posts...</p>;

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
            <ul>
                {relatedPosts.map((post) => (
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
