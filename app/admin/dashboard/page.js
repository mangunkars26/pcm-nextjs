"use client"; // Menandai file ini sebagai client component

import AuthWrapper from "@/components/AuthWrapper";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import StatisticsCard from "./StatsCard";
import NotificationList from "./NotifList";
export default function AdminDashboard() {
    const [userCount, setUserCount] = useState(0);
    const [postCount, setPostCount] = useState(0);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch data for users, posts, and notifications from your API
        async function fetchData() {
            const usersResponse = await fetch('/api/users/count');
            const postsResponse = await fetch('/api/posts/count');
            const notificationsResponse = await fetch('/api/notifications');

            const usersData = await usersResponse.json();
            const postsData = await postsResponse.json();
            const notificationsData = await notificationsResponse.json();

            setUserCount(usersData.count);
            setPostCount(postsData.count);
            setNotifications(notificationsData);
        }

        fetchData();
    }, []);

    return (
        <AuthWrapper>
            <div className="flex flex-col md:flex-row container mx-auto p-4">
                <Sidebar />
                <main className="md:w-3/4 md:ml-4">
                    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                    <p className="mb-4">Selamat datang di sini</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <StatisticsCard title="Jumlah Pengguna" count={userCount} />
                        <StatisticsCard title="Jumlah Konten" count={postCount} />
                    </div>
                    <NotificationList notifications={notifications} />
                </main>
            </div>
        </AuthWrapper>
    );
}
