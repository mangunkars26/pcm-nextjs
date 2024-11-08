// D:\CODING\blog-nextjs\app\layout.js

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'My Blog',
  description: 'A blog about various topics',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-screen">
        {/* <Navbar /> */}
        {/* <CategoriesNavbar /> */}
        {/* <Menu /> */}
        <AuthProvider>
        {children}
        </AuthProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
