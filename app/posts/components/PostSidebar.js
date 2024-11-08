import { useState, useEffect } from "react";
// import api from "../config/axios";
import api from "@/config/api";

export default function PostSidebar() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data.data); // Sesuaikan dengan struktur response API Anda
      } catch (error) {
        setError("Gagal memuat kategori.");
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside>
      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p className="text-gray-600">Welcome to our blog! Follow us for the latest updates.</p>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Kategori</h3>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <ul className="text-gray-700 space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`/category/${category.id}`} className="hover:text-blue-500">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Recent Articles Section */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Artikel Terbaru</h3>
        <ul className="text-gray-700 space-y-2">
          <li><a href="#" className="hover:text-blue-500">Tips Produktivitas</a></li>
          <li><a href="#" className="hover:text-blue-500">Mengelola Waktu</a></li>
          <li><a href="#" className="hover:text-blue-500">Perkembangan Teknologi</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div>
        <p className="text-sm text-gray-600">Ikuti kami di media sosial:</p>
        <div className="flex space-x-3 mt-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
        </div>
      </div>
    </aside>
  );
}
