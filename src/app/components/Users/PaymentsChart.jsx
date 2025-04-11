'use client';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { month: 'Jan', ride: 20, crypto: 50 },
  { month: 'Feb', ride: 35, crypto: 40 },
  { month: 'Mar', ride: 45, crypto: 55 },
  { month: 'Apr', ride: 30, crypto: 60 },
  { month: 'May', ride: 60, crypto: 45 },
  { month: 'Jun', ride: 80, crypto: 75 },
  { month: 'Jul', ride: 55, crypto: 85 },
  { month: 'Aug', ride: 65, crypto: 70 },
  { month: 'Sep', ride: 90, crypto: 60 },
  { month: 'Oct', ride: 75, crypto: 50 },
  { month: 'Nov', ride: 50, crypto: 40 },
  { month: 'Dec', ride: 95, crypto: 90 },
];

const PaymentsChart = () => {
  const [selectedRange, setSelectedRange] = useState('Date Range');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dateRanges = ['Today', 'This Week', 'Monthly'];

  return (
   <>
  
    <div className="w-full mt-10 h-[250px]  bg-[#FFFFFF] mx-auto p-7 rounded-md z-20">
      {/* Top Section with Heading and Date Range Dropdown */}
      
       
        <div className="flex  justify-between pt-2 mb-8">
          <h2 className="text-sm font-semibold text-gray-800 pl-2">Active Users trends & Engagement</h2>
       

        {/* Right: Date Range Dropdown */}
        <div className="relative max-w-40 z-50 pr-2">
          <div
            className="flex items-center border border-gray-300 px-3 py-1 rounded-md cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-gray-700 text-sm ">{selectedRange}</span>
            <ChevronDown size={16} className="ml-2 text-gray-600" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              {dateRanges.map((range) => (
                <div
                  key={range}
                  className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedRange(range);
                    setIsDropdownOpen(false);
                  }}
                >
                  {range}
                </div>
              ))}
            </div>
          )}
        </div>
        </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis domain={[10, 100]} tickCount={10} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ride" stroke="blue" strokeWidth={1} />
          <Line type="monotone" dataKey="crypto" stroke="red" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default PaymentsChart;
