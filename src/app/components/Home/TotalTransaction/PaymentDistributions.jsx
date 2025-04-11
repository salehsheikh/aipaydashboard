'use client';
import { useState } from 'react';

const PaymentDistributions = () => {
  const [data] = useState([
    { label: 'Visa', value: '$12,400', color: '#7086FD' },
    { label: 'Pay Pal', value: '$8,7500', color: '#6FD195' },
    { label: 'Zelle', value: '$23,000', color: '#07DBFA' },
    { label: 'Google Pay', value: '$3,210', color: '#FFAE4C' },
    
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-13 mt-2">
      <div className="flex justify-start mb-4">
        <h2 className="text-lg font-semibold">Payment Distributions</h2>
      </div>

      <div className="flex gap-8 items-center">
        {/* Legend Rows */}
        <div className="flex-1 space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <p className="text-sm">{item.label}</p>
              </div>
              <p className="text-sm font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="relative w-71 h-47 ">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {data.map((_, index) => {
              const circumference = 2 * Math.PI * 45;
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="35"
                  fill="transparent"
                  stroke={data[index].color}
                  strokeWidth="30"
                  strokeDasharray={`${circumference / 4} ${circumference * 3 / 4}`}
                  strokeLinecap="none"
                  transform={`rotate(${index * 90 - 90} 50 50)`}
                />
              );
            })}
          </svg>
          
        </div>
      </div>
    </div>
  );
};

export default PaymentDistributions;