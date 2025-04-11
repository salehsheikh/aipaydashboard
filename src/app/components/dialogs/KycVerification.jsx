'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
export default function KycVerification({ onClose, isOpen,onNext }) {
  const [checkedItems, setCheckedItems] = useState({
    document1: false,
    document2: false,
    document3: false
  });

  const handleCheckboxChange = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  const handleNext = () => {
    onNext();
  };

  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg  mt-6 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-200">
          <h2 className="text-xl font-semibold">KYC Verification</h2>
          <button 
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className=" font-semibold">
            Please verify the following documents to complete your KYC process
          </p>

          {/* Document Rows */}
          <div className="space-y-3">
            <div className="border-2 border-blue-500 rounded-lg p-2 flex justify-between items-center">
              <span className="text-sm ">Government ID</span>
              <input
                type="checkbox"
                checked={checkedItems.document1}
                onChange={() => handleCheckboxChange('document1')}
                className="w-5 h-5 text-[#086788] rounded focus:ring-blue-500"
              />
            </div>

            <div className="border-2 border-blue-500 rounded-lg p-2 flex justify-between items-center">
              <span className="text-sm ">Selfie Verification</span>
              <input
                type="checkbox"
                checked={checkedItems.document2}
                onChange={() => handleCheckboxChange('document2')}
                className="w-5 h-5 text-[#086788] rounded focus:ring-blue-500"
              />
            </div>

            <div className="border-2 border-blue-500 rounded-lg p-2 flex justify-between items-center">
              <span className="text-sm ">Bank Statement</span>
              <input
                type="checkbox"
                checked={checkedItems.document3}
                onChange={() => handleCheckboxChange('document3')}
                className="w-5 h-5 text-[#086788] rounded focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
            onClick={handleNext}
              className="w-full bg-[#086788] text-white py-3 rounded-lg"
            >
              Next
            </button>
            <button
              onClick={onClose}
              className="w-full bg-[#F1D7D7]  text-red-500 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    
   </>
  );
}