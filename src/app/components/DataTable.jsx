'use client';
import { useState } from 'react';
import StatusBadge from '../../helpers/StatusBadge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const colorClasses = {
  blue: 'bg-[#247BA0]',
  green: 'bg-green-600 hover:bg-green-700',
  red: 'bg-red-600 hover:bg-red-700'
};

export default function DataTable({ headers, rows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Pagination calculations
  const totalItems = rows.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedRows = rows.slice(startIndex, endIndex);

  // Generate page numbers with ellipsis logic
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const leftBound = Math.max(2, currentPage - 1);
      const rightBound = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);
      if (leftBound > 2) pages.push('...');
      for (let i = leftBound; i <= rightBound; i++) pages.push(i);
      if (rightBound < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="mx-3 w-auto">
      {/* Table */}
      <div className="rounded-3xl overflow-hidden">
        {/* Header Row */}
        <div 
          className="bg-[#CE2323] grid py-3 font-semibold text-white text-sm rounded-t-3xl"
          style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
        >
          {headers.map((header, index) => (
            <span key={index} className="text-center">
              {header}
            </span>
          ))}
        </div>

        {/* Data Rows */}
        {paginatedRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`bg-[#FFFFFF] grid items-center py-3 text-sm 
                        ${rowIndex !== paginatedRows.length - 1 ? 'border-b border-gray-300' : ''}`}
            style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
          >
            {Object.entries(row.data).map(([key, value], colIndex) => (
              <div key={colIndex} className="text-center">
                {key === 'Status' ? <StatusBadge status={value} /> : value}
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={row.actionHandler}
                className={`${colorClasses[row.buttonColor]} text-white px-4 py-2 rounded-md transition-colors`}
              >
                {row.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{endIndex}</span> of{' '}
              <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5  text-[#247BA0]" />
              </button>

              {generatePageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={index} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2  rounded-sm text-sm font-semibold ${
                      currentPage === page
                        ? 'bg-[#247BA0] text-white focus:z-20'
                        : 'text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5 text-[#247BA0]" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}