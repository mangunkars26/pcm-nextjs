"use client";
import api from "@/config/api";
import { useEffect, useState } from "react";
import StatisticsCard from "../StatsCard";

export default function PostsStatsGrid() {
    const [postStats, setPostStats] = useState({
        total_posts: 0,
        published_posts: 0,
        draft_posts: 0,
        scheduled_posts: 0,
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token'); // Ambil token dari localStorage
                if (!token) {
                    console.error("Token not found");
                    return; // Keluar jika token tidak ada
                }

                const postsResponse = await api.get('/admin/posts/stats', {
                    headers: {
                        Authorization: `Bearer ${eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3MzA1NTkyMTksImV4cCI6MTczMDU2MjgxOSwibmJmIjoxNzMwNTU5MjE5LCJqdGkiOiJDT1NvOFdRbDBhZlRBaG9aIiwic3ViIjoiNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.MjJRxCiXtno8oyDFfb-Wjp_IZkfpaF17yoBHguPG3kw}`,
                    }
                });

                const postsData = postsResponse.data.data; // Ambil data langsung dari respons Axios

                console.log(postsData); // Tampilkan data statistik di konsol
                setPostStats(postsData); // Langsung gunakan postsData
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <StatisticsCard title="Jumlah Konten" count={postStats.total_posts} />
            <StatisticsCard title="Post Terbit" count={postStats.published_posts} />
            <StatisticsCard title="Post Draft" count={postStats.draft_posts} />
            <StatisticsCard title="Post Terjadwal" count={postStats.scheduled_posts} />
        </div>
    );
}
