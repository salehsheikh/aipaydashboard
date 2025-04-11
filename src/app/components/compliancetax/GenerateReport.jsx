'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

export default function GenerateReport({ onClose }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [reportTypeOpen, setReportTypeOpen] = useState(false);
  const categories = ['VAT', 'Service Tax', 'Sales Tax', 'Corporate Tax','Transaction Fee Tax'];
  const dateRanges = ['Last Month', 'Last Quarter', 'Yearly'];
  const reportTypes = ['Monthly', 'Weekly', 'Yearly'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedDateRange, setSelectedDateRange] = useState(dateRanges[0]);
  const [selectedReportType, setSelectedReportType] = useState(reportTypes[0]);

 

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-semibold">Generate New Report</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            <X size={24} />
          </button>
        </div>
        
        {/* Border */}
        <div className="border-b border-gray-300 mb-6" />

        {/* Category Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2"> Tax Category</label>
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full flex justify-between items-center border border-[#086788] rounded-md p-3"
            >
              <span>{selectedCategory}</span>
              {categoryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {categoryOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-[#086788] rounded-md shadow-lg">
                {categories.map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCategoryOpen(false);
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date Range Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Date Range</label>
          <div className="relative">
            <button
              onClick={() => setDateRangeOpen(!dateRangeOpen)}
              className="w-full flex justify-between items-center border border-[#086788] rounded-md p-3"
            >
              <span>{selectedDateRange}</span>
              {dateRangeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {dateRangeOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-[#086788] rounded-md shadow-lg">
                {dateRanges.map((range) => (
                  <div
                    key={range}
                    onClick={() => {
                      setSelectedDateRange(range);
                      setDateRangeOpen(false);
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {range}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Report Type Dropdown */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Report Type</label>
          <div className="relative">
            <button
              onClick={() => setReportTypeOpen(!reportTypeOpen)}
              className="w-full flex justify-between items-center border border-[#086788] rounded-md p-3"
            >
              <span>{selectedReportType}</span>
              {reportTypeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {reportTypeOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-[#086788] rounded-md shadow-lg">
                {reportTypes.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSelectedReportType(type);
                      setReportTypeOpen(false);
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Generate Report Button */}
        <button
          className="w-full bg-[#086788] text-white py-3 rounded-md"
        >
          Generate Report
        </button>
      </div>
    </div>
  );
}