'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({ label, options, setSelected, borderColor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block min-w-[120px]">
      {/* Dropdown Button */}
      <div
        className={`p-2 flex justify-between items-center ${borderColor} border rounded-md bg-white cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-sm font-semibold">{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 mt-1 bg-white border ${borderColor} rounded-md shadow-md transition-all duration-200 ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        {options.map((option, index) => (
          <div
            key={option}
            className={`p-2 text-sm hover:bg-gray-200 ${
              index !== options.length - 1 ? 'border-b border-gray-300 mx-1' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelected(option);
              setIsOpen(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
