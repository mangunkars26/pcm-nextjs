import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '@/config/menu';
import '@/styles/globals.css';

// app/layout.js
export const metadata = {
  title: 'My Blog',
  description: 'A blog about various topics',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add metadata or other head elements here */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {/* Include your Navbar and Menu components here */}
        <Navbar />
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
