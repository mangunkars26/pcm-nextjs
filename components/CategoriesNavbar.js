"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const CategoriesNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Cek apakah data kategori sudah ada di sessionStorage
    const cachedCategories = sessionStorage.getItem("categories");

    if (cachedCategories) {
      setCategories(JSON.parse(cachedCategories));
    } else {
      // Fetch data kategori dari API jika belum ada di cache
      fetchCategories();
    }
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/categories"); // Endpoint untuk mengambil kategori
      if (!response.ok) {
        throw new Error("Error fetching categories");
      }
      const result = await response.json();
      const categories = result.data;
      setCategories(categories);

      // Simpan kategori di sessionStorage untuk caching
      sessionStorage.setItem("categories", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-2">
      <div className="container mx-auto flex justify-center">
        <ul className="flex gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoriesNavbar;
