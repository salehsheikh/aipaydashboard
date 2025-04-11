'use client';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { month: 'Jan', Visa: 20, Btc: 50 },
  { month: 'Feb', Visa: 35, Btc: 40 },
  { month: 'Mar', Visa: 45, Btc: 55 },
  { month: 'Apr', Visa: 30, Btc: 60 },
  { month: 'May', Visa: 60, Btc: 45 },
  { month: 'Jun', Visa: 80, Btc: 75 },
  { month: 'Jul', Visa: 55, Btc: 85 },
  { month: 'Aug', Visa: 65, Btc: 70 },
  { month: 'Sep', Visa: 90, Btc: 60 },
  { month: 'Oct', Visa: 75, Btc: 50 },
  { month: 'Nov', Visa: 50, Btc: 40 },
  { month: 'Dec', Visa: 95, Btc: 90 },
];

const TransactionChart = () => {
  const [selectedRange, setSelectedRange] = useState('Date Range');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dateRanges = ['Today', 'This Week', 'Monthly'];

  return (
   <>
  
    <div className="w-full bg-[#FFFFFF] h-84 py-3  mt-3 rounded-xl  z-30">
      {/* Top Section with Heading and Date Range Dropdown */}
      
       
        <div className="flex  justify-between py-2">
          <h2 className="text-sm font-semibold text-gray-800 pl-2">Revenue Trends</h2>
       

        {/* Right: Date Range Dropdown */}
        <div className="relative  pr-4 max-w-40 z-20">
          <div
            className="flex items-center border border-[#247BA0] px-3 py-1 rounded-md cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-gray-700 text-sm ">{selectedRange}</span>
            <ChevronDown size={16} className="ml-2 text-gray-600" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-full bg-white border border-[#247BA0]  rounded-md shadow-lg">
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
          <Line type="monotone" dataKey="Visa" stroke="blue" strokeWidth={1} />
          <Line type="monotone" dataKey="Btc" stroke="red" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default TransactionChart;
