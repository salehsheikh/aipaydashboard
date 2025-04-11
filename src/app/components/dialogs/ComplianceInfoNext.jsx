'use client';
import { useState } from 'react';
import { X,} from 'lucide-react';
import SuccessfullDialog from './Successfull';
export default function ComplianceInfoNext({  onClose,}) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [notes, setNotes] = useState(''); 
 
  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <>
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Request More information</h2>
          <button 
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
         

          {/* Notes Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border-2 border-[#086788] rounded-lg h-32 focus:ring focus:ring-[#086788] outline-none"
              placeholder="Enter additional notes..."
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
             onClick={handleSubmit}
              className="w-full bg-[#086788] text-white py-2.5 rounded-lg hover:bg-[#075672] transition-colors"
            >
              Send Request
            </button>
            <button
              onClick={onClose}
              className="w-full bg-[#F1D7D7] text-red-700 py-2.5 rounded-lg hover:bg-[#e6c2c2] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
     {/* Success Dialog */}
     {showSuccess && (
        <SuccessfullDialog 
          message="Successfull!"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
    
  );
}