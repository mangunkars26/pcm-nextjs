"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
// import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col bg-gray-100 lg:pl-64">
        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
