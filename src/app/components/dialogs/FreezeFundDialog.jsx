import Image from 'next/image'
import React from 'react'
import UniformWave from '../UniformWave'
import { useDialog } from '../../hooks/useDialog'
import FreezeReasonDialog  from './FreezeReasonDialog';
const FreezeFundDialog = ({onClose} ) => {
    const freezeDialog=useDialog();
    
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-[#F7F7F7] flex items-center justify-center p-4">
              <UniformWave className="z-0" />
    <div className='max-w-md bg-[#FFFFFF] rounded-lg px-8 py-4 mt-4 z-60'>
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
         <h1 className='text-2xl'>Are you sure you want to freeze **$10,000** in John Doe's account due to suspicious activity?</h1>
         
         <div className="space-y-4 mt-6">
           <button
             onClick={freezeDialog.openDialog}
             className="w-full bg-[#086788] hover:bg-[#075a73] text-white font-medium py-3 rounded-lg transition-colors"
           >
             Confirm 
           </button>
           
           <button
             onClick={onClose}
             className="w-full bg-[#F1D7D7] hover:bg-[#e5c5c5] text-[#086788] font-medium py-3 rounded-lg transition-colors"
           >
             Cancel
           </button>
         </div>
         {freezeDialog.isOpen && (
            <FreezeReasonDialog onClose={freezeDialog.closeDialog} />
        )}
       </div>
       </div>
  )
}

export default FreezeFundDialog
