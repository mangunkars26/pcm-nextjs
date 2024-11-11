// src/pages/Home.jsx
"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import PostsList from "@/components/PostsList";

const PostsPage = () => {
  return (
    <div className="container mx-auto p-4">
          <Navbar />

      <h1 className="text-3xl font-bold mb-6">Welcome to the Blog</h1>

      {/* Panggil komponen PostsList dengan props yang diinginkan */}
      <PostsList />
    </div>
  );
};

export default PostsPage;
