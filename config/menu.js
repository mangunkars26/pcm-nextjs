// components/Menu.js
import Link from 'next/link';

const Menu = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/home" className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/categories" className="hover:text-gray-300">Categories</Link>
                </li>
                <li>
                    <Link href="/tags" className="hover:text-gray-300">Tags</Link>
                </li>
                <li>
                    <Link href="/authors" className="hover:text-gray-300">Authors</Link>
                </li>
                <li>
                    <Link href="/search" className="hover:text-gray-300">Search</Link>
                </li>
                <li>
                    <Link href="/login" className="hover:text-gray-300">Login</Link>
                </li>
                <li>
                    <Link href="/register" className="hover:text-gray-300">Register</Link>
                </li>
                <li>
                    <Link href="/admin/dashboard" className="hover:text-gray-300">Admin</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
