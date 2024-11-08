// LayoutWrapper.jsx
import React from 'react';

const PostLayoutWrapper = ({ mainContent, sidebarContent }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {mainContent}
        </div>

        {/* Sidebar Content */}
        <aside className="w-full lg:w-1/4 lg:mt-4">
          {sidebarContent}
        </aside>
      </div>
    </div>
  );
};

export default PostLayoutWrapper;
