// components/PostCard.js
import Link from 'next/link';

export default function PostCard({ post }) {
    return (
        <div className="border border-gray-300 rounded">
            <img src={post.featured_image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                    <Link href={`/posts/${post.slug}`} className="hover:text-blue-500">
                        {post.title}
                    </Link>
                </h2>
                {/* <p className="text-gray-600">{post.excerpt}</p> */}
            </div>
        </div>
    );
}
