"use client";

// app/admin/posts/page.js
import { useState, useEffect } from 'react';
import api from '../../../config/axios';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import PostCard from '../../../components/PostCard';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await api.get('/posts');
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Posts</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add New Post</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Post">
        {/* Form untuk tambah post baru */}
        <form>
          {/* Input fields untuk title, body, dan featured image */}
        </form>
      </Modal>
    </div>
  );
}
