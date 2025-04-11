'use client';
import { useState, useRef } from 'react';
import { CalendarRange, X } from 'lucide-react';
import UniformWave from '../UniformWave';
import SuccessfullDialog from './Successfull';

export default function UpdateExchangeDialog({ onClose }) {
  const [newRate, setNewRate] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
 
  const dateInputRef = useRef(null);

  const handleCalendarClick = () => {
    dateInputRef.current.showPicker();
  };
  const handleConfirmSave=()=>{

    setShowSuccess(true);
  }

  return (
    <>
    <div className="fixed inset-0 backdrop-blur-md bg-[#F7F7F7] flex items-center justify-center p-4">
              <UniformWave className="z-0" />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 z-10">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
          <h2 className="text-lg font-semibold">Update Exchange Rate</h2>
          <button onClick={onClose} className="text-red-500">
            <X size={20} />
          </button>
        </div>

        {/* Form Fields */}
        <div className="mt-4 space-y-3">
          <h1 className='font-semibold'>Adjust the exchange rate for Bitcoin (BTC) to ensure correct conversion for transactions.</h1>
          
          {/* Current Rate */}
          <label className="block font-medium text-sm">Current Rate</label>
          <input
            type="text"
            className="w-full border-2 border-blue-300 rounded-md p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            disabled
            value="1 BTC = $48,500"
          />

          {/* New Rate */}
          <label className="block font-medium text-sm">New Rate</label>
          <input
            type="number"
            placeholder='Enter new rate'
            className="w-full border-2 border-blue-300 rounded-md p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
          />

          {/* Effective Date */}
          <div className="relative">
            <input
              type="text"
              placeholder="Effective Date"
              className="w-full border-2 border-blue-300 rounded-md p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              value={effectiveDate}
              readOnly
            />
            <button
              onClick={handleCalendarClick}
              className="absolute right-3 top-2 text-blue-500 hover:text-blue-700 transition-colors"
            >
              <CalendarRange size={20} />
            </button>
            <input
              type="date"
              ref={dateInputRef}
              className="absolute right-20 opacity-0 -z-10"
              onChange={(e) => setEffectiveDate(e.target.value)}
            />
          </div>

          {/* Notes */}
          <label className="block font-medium text-sm">Notes</label>
          <textarea
            className="w-full border-2 border-blue-300 rounded-md p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mt-4">
          <button 
          onClick={handleConfirmSave}
          className="w-full bg-[#086788]  py-2.5 rounded-lg font-medium text-white ">
            Save New Rate
          </button>
          <button
            onClick={onClose}
            className="w-full bg-red-100 hover:bg-red-200 py-2.5 rounded-lg font-medium text-red-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    {showSuccess && (
        <SuccessfullDialog 
          message="Saved Successfully!" 
          onClose={() => setShowSuccess(false)}
        />
      )}
      </>
  );
}