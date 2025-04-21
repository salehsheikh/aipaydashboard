'use client';
import Image from 'next/image';
import UniformWave from '../UniformWave';
import { useState } from 'react';
import SuccessfullDialog from './Successfull';
const RefundDialog = ({ onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleConfirmRefund=()=>{

    setShowSuccess(true);
  }
  return (
    <>
    <div className="fixed inset-0 backdrop-blur-md bg-[#F7F7F7] flex items-center justify-center p-4">
   <UniformWave className="z-0" />
    <div className='max-w-md bg-[#FFFFFF] rounded-lg px-8 py-4 shadow-xl z-60'>
      <div className='flex items-center justify-center mb-6'>
        <Image 
          src="/dicon.png" 
          alt="Logo" 
          width={120} 
          height={120} 
          priority 
          className="drop-shadow-md"
        />
      </div>
      <h1 className='text-2xl'>Are you sure you want to refund $250 to Salman Haider via PayPal?</h1>
      
      <div className="space-y-4 mt-6">
        <button
          onClick={handleConfirmRefund}
          className="w-full bg-[#086788] hover:bg-[#075a73] text-white font-medium py-3 rounded-lg transition-colors"
        >
          Confirm refund
        </button>
        
        <button
          onClick={onClose}
          className="w-full bg-[#F1D7D7] hover:bg-[#e5c5c5] text-[#086788] font-medium py-3 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
    </div>
    {showSuccess && (
      <SuccessfullDialog 
        message="Refund Successfull!" 
        onClose={() => setShowSuccess(false)}
      />
    )}
    </>
  );
}

export default RefundDialog;