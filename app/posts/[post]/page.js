"use client";

import { useState, useEffect } from "react";
import { use } from "react"; // gunakan React.use untuk param
import api from "../../../config/api";
import PostSidebar from "../components/PostSidebar";
import LoadingDots from "@/components/LoadingDots";
import SectionWrapper from "@/components/wrapper/SectionLayoutWrapper";
import SidebarSection from "@/components/wrapper/SidebarWrapper";
import PostDetail from "@/components/PostDetail";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/wrapper/PageWrapper";
import PostLayoutWrapper from "@/components/wrapper/PostLayoutWrapper";

export default function PostPage({ params }) {
  // unwrap params jika params adalah Promise
  const unwrappedParams = use(params);

  const [post, setPost] = useState(null); // Ubah default state menjadi null agar sesuai dengan pengecekan kondisi post
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${unwrappedParams.post}`);
        setPost(response.data.data); // update untuk mengakses post data dengan benar
      } catch (err) {
        setError("Gagal memuat post. Pastikan post ID valid.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (unwrappedParams?.post) {
      fetchPost();
    }
  }, [unwrappedParams?.post]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingDots />
      </div>
    );
  }

  if (error) return <div className="text-red-600 text-center">{error}</div>;
  if (!post) return <div className="text-center">Post tidak ditemukan</div>;

  return (
    <main>
      <Navbar />
      <PostLayoutWrapper
       mainContent={
         <PostDetail
           title={post.title}
           category={post.categories?.name}
           author={post.author?.name}
           image={post.featured_image}
           body={post.body}
         />
       }
       sidebarContent={
         <SidebarSection title="Related Posts">
           <PostSidebar />
         </SidebarSection>
       }
     />


    </main>
  );
}
