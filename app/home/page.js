"use client";

import SidebarSection from '@/components/wrapper/SidebarWrapper';
// import ContentSection from '@/components/wrapper/ContentSection';
import Hero from '@/components/homepage/Hero';
import PostsList from '@/components/PostsList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/wrapper/PageWrapper';

export default function HomePage() {
  return (
    <main>
      <Navbar />
    <PageWrapper>
    <Hero />

    {/* Main Content and Sidebar Layout */}
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Main Content Section */}
      <div className="flex-1">
          <PostsList
            limit={6}
            categories={["database"]}
            showPagination={true}
          />
      </div>

      {/* Sidebar Section */}
      <aside className="w-full lg:w-1/3">
        <SidebarSection title="Related Posts">
          {/* Example: Render related posts or placeholders */}
          {/* Insert component or mapping here */}
        </SidebarSection>

        <SidebarSection title="Popular Tags">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">#WebDev</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">#React</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">#JavaScript</span>
            {/* Additional tags */}
          </div>
        </SidebarSection>
      </aside>
    </div>
    </PageWrapper>

      <Footer />
    </main>
  );
}
