// src/components/Grid/PostGrid.jsx

import PostCard from "../PostCard";

export default function PostGrid({ posts }) {
  console.log("Posts data in PostGrid:", posts); // Tambahkan ini untuk memastikan data
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }
  


