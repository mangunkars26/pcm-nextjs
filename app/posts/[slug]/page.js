// app/posts/[slug]/page.js
"use client";

import { usePathname } from "next/navigation";
import PostDetail from "@/components/PostDetail";

export default function PostPage() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop(); // Extract slug dari path

    return (
        <div className="container mx-auto p-6">
            <PostDetail slug={slug} />
        </div>
    );
}
