// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">My Blog</Link>
        <div className="flex space-x-4">
          <Link href="/categories" className="hover:text-gray-300">Categories</Link>
          <Link href="/tags" className="hover:text-gray-300">Tags</Link>
          <Link href="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
}
