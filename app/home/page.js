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
          title="Database"
          limit={6}                     
          categories={["database"]}      
          showPagination={true}          
          showSearchBar={false}          // Hide search bar
          gridCols={3}                   // Display in 3 columns
      />
      </div>


      {/* Sidebar Section */}
      <aside className="w-full lg:w-1/3">
        <SidebarSection title="Related Posts">
          {/* Example: Render related posts or placeholders */}
          {/* Insert component or mapping here */}
        </SidebarSection>

      </aside>
    </div>
    </PageWrapper>

      <Footer />
    </main>
  );
}
