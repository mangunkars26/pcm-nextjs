import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Tidak perlu menampilkan pagination jika hanya 1 halaman

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  // Fungsi untuk membuat daftar nomor halaman
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-2 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-2 py-1 rounded bg-gray-200">
        Previous
      </button>
      {renderPageNumbers()}
      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-2 py-1 rounded bg-gray-200">
        Next
      </button>
    </div>
  );
};

export default Pagination;
