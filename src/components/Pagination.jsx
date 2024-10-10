import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button onClick={handlePrev} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300">
        Previous
      </button>
      <span className="self-center text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300">
        Next
      </button>
    </div>
  );
}

export default Pagination;
