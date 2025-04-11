'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
const REPORT_DETAILS_CONFIG = [
  { name: 'Transaction ID', key: 'transactionId' },
  { name: 'Report Type', key: 'reporttype' },
  { name: 'Amount', key: 'amount' },
  { name: 'Payment Method', key: 'Paymentmethod' },
  { name: 'Risk Level', key: 'rsiklevel' },
  {name : 'User Involved', key :'userinvolved'},
  {name : 'Reason', key :'reason'},
  {name : 'Status', key :'status'}
];

export default function ComplianceReport({ report, onClose }) {
  const [isResolved, setIsResolved] = useState(true);
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-100">
   
      <div className="bg-white rounded-lg w-full max-h-screen max-w-md z-100">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-200">
          <h2 className="text-xl font-semibold">compliance report</h2>
          <button 
            onClick={onClose}
            className="text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[50vh] overflow-y-auto">
          {/* Account Summary */}
          <div className="bg-[#CF1742] mx-4 mt-4 p-3 rounded-lg">
            <div className="flex justify-between text-white text-sm font-medium">
              <span>Name</span>
              <span>Value</span>
            </div>
          </div>

          {/* Details List */}
          <div className="p-4">
            {REPORT_DETAILS_CONFIG.map(({ name, key }, index) => (
              <div 
                key={name}
                className={`flex justify-between py-2 ${
                  index !== REPORT_DETAILS_CONFIG.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="text-gray-600 text-sm">{name}</span>
                <span className="text-sm text-gray-800">
                  {report.details[key] || report[key]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="p-3 border-t border-gray-200">
          <div className="mb-3 flex items-center justify-between bg-[#09AA3421] p-2 rounded-md">
            <span className="font-medium">
              {isResolved ? 'Marked as Resolved' : 'Unresolved'}
            </span>
            <button
              onClick={() => setIsResolved(!isResolved)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isResolved? 'bg-[#91c1c8]' : 'bg-gray-300'
              }`}
            >
              <span className={`absolute h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                isResolved ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="space-y-3">
            <button
              className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white "
            >
             Download Report
            </button>
            <button 
            onClick={onClose}
            className="w-full bg-[#F1D7D7] text-red-700 py-2.5 rounded-lg font-medium">
            Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}