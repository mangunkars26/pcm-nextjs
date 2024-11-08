import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-7xl w-full">{children}</div>
    </div>
  );
};

export default PageWrapper;
