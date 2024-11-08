import React from "react";
import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {post.featured_image && (
                <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    />
            )}
            <div className="p-4">
                <div className="flex items-center justify-between text-gray-500 text-xs mb-2">
                    <p className="text-sm text-gray-500">
                        By {post.author.name} in {(post.categories || []).map(cat => cat.name).join(", ")}
                        </p>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                    <Link href={`/posts/${post.slug}`}>
                        {post.title}
                    </Link>
                </h2>

                <p className="text-gray-600 mt-2 line-clamp-3">
                    {post.body.substring(0, 50)}...
                </p>
            </div>
        </div>
    );
}

export default PostCard;