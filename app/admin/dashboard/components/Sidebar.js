// app/admin/dashboard/components/Sidebar.js
export default function Sidebar() {
    return (
        <aside className="md:w-1/4 bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <ul>
                <li><a href="/admin/users" className="block p-2 hover:bg-gray-300">Pengguna</a></li>
                <li><a href="/admin/posts" className="block p-2 hover:bg-gray-300">Konten</a></li>
                <li><a href="/admin/settings" className="block p-2 hover:bg-gray-300">Pengaturan</a></li>
                <li><a href="/admin/statistics" className="block p-2 hover:bg-gray-300">Statistik</a></li>
            </ul>
        </aside>
    );
}
