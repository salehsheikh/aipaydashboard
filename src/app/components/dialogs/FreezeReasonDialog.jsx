'use client';
import { X } from 'lucide-react';
import { useState } from 'react';
import SuccessfullDialog from './Successfull';

const FreezeReasonDialog = ({ onClose }) => {
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const handleConfirmFreeze=()=>{

    setShowSuccess(true);
  }

  return (
    <>
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-lg w-full mt-8 max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <h2 className="text-xl font-semibold">Add a Reason</h2>
          <button 
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Reason Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Reason
            </label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 border-2 border-blue-500  outline-none rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter freeze reason"
            />
          </div>

          {/* Notes Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border-2  outline-none border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
              placeholder="Additional notes..."
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleConfirmFreeze}
              className="w-full bg-[#086788] text-white py-3 rounded-lg font-medium hover:bg-[#075a73] transition-colors"
            >
              Confirm & Freeze Funds
            </button>
            <button
              onClick={onClose}
              className="w-full bg-[#F1D7D7] text-gray-700 py-3 rounded-lg font-medium"
            >
              Cancel
            </button>
          </div>
        
        </div>
      </div>
    </div>
      {showSuccess && (
        <SuccessfullDialog 
          message=" Successfull!" 
          onClose={() => setShowSuccess(false)}
        />
      )}
      </>
  );
};

export default FreezeReasonDialog;