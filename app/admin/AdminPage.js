import AdminLayout from "./layout";

import Navbar from "@/components/Navbar";
export default function AdminPage() {
  return (
    <>
            <Navbar />
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin panel. Here you can manage all the settings and content.</p>
      </div>
    </>
  );
}
