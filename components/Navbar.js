// components/Navbar.js

"use client";

import React from "react";
import Link from "next/link";
import { DropdownMenu } from "@/components/DropdownMenu";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";
import menuItems from "./menuItems";


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { authToken, clearAuthToken } = useAuth(); // Gunakan authToken dan clearAuthToken dari AuthContext

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo atau Title */}
        <div className="ml-12">
          <Link href="/" aria-label="Kembali ke Beranda">
            <Logo />
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            // Tampilkan "Admin" hanya jika authToken ada (sudah login)
            (item.title !== "Admin" || authToken) && (
              <li key={index} className="relative group">
                {item.children ? (
                  <DropdownMenu title={item.title} items={item.children} />
                ) : (
                  <Link href={item.href} className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                )}
              </li>
            )
          ))}
          {authToken ? (
            <li>
              <button onClick={clearAuthToken} className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login" className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Toggle button hanya tampil di mobile */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-gray-200 md:hidden focus:outline-none"
        >
          {isOpen ? (
            <Cross1Icon className="w-6 h-6" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile Slide-in */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg z-50`}
      >
        <div className="flex flex-col p-4">
          {menuItems.map((item, index) => (
            (item.title !== "Admin" || authToken) && (
              <div key={index} className="py-2">
                {item.children ? (
                  <DropdownMenu title={item.title} items={item.children} />
                ) : (
                  <Link href={item.href} className="block text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                )}
              </div>
            )
          ))}
          {authToken ? (
            <div className="py-2">
              <button onClick={() => { clearAuthToken(); setIsOpen(false); }} className="block text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Logout
              </button>
            </div>
          ) : (
            <>
              <div className="py-2">
                <Link href="/login" className="block text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </div>
              <div className="py-2">
                <Link href="/register" className="block text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
