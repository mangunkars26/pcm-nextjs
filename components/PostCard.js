"use client";

// File: components/PostCard.js
import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <Link href={`/posts/${post.slug}`}>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="relative">
                    {post.featured_image && (
                        <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    {post.category && post.category.name && (
                        <span className="absolute top-2 left-2 bg-green-800 text-white text-xs font-normal py-1 px-2 rounded-sm shadow-md">
                            {post.category.name}
                        </span>
                    )}
                </div>
                <div className="p-4">
                    <div className="text-gray-500 text-xs mb-2 flex justify-between">
                        <span className="text-sm">
                            By {post.user?.name || "Unknown"}
                        </span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                            {new Date(post.created_at).toLocaleDateString()}
                        </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                        {post.body.substring(0, 100)}...
                    </p>
                    <div className="mt-3">
                        <span className="text-xs text-gray-400">Tags:</span>
                        <span className="ml-2 text-xs text-blue-500">
                            {(post.tags || []).map(tag => tag.name).join(", ")}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
