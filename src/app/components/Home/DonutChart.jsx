'use client';
import { useState } from 'react';

const DonutChart = () => {
  const [data] = useState([
    { label: 'Ride Comissions', value: '$12,400', color: '#7086FD' },
    { label: 'Listing Ads', value: '$8,750', color: '#07DBFA' },
    { label: 'Subscriptions', value: '$23,000', color: '#988AFC' },
    { label: 'Peer to peer transaction', value: '$5,430', color: '#6FD195' },
    { label: 'Listing crypto currencies', value: '$7,890', color: '#FFAE4C' },
    { label: 'Watch to earn ', value: '$3,210', color: '#1F93FF' },
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-3  max-h-98 relative z-10">
      <h2 className="text-lg font-semibold mb-4">Chart</h2>

      {/* Donut Chart */}
      <div className="relative w-46 h-46 mx-auto mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {data.map((_, index) => {
            const angle = (index * 60) - 90; // 6 segments, 60 degrees each
            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke={data[index].color}
                strokeWidth="10"
                strokeDasharray={`${60} ${300}`} // 60/360 * circumference
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="text-sm text-gray-600">Amount Earned</h3>
          <p className="text-2xl font-bold">$59,680</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-xs font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;