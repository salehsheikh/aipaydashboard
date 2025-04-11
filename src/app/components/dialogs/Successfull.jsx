import Image from 'next/image'
import React from 'react'
import UniformWave from '../UniformWave'

const SuccessfullDialog = ({ message}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-[#F7F7F7] flex items-center justify-center p-4 z-100">
        <UniformWave/>
    <div className=' max-w-md bg-[#FFFFFF] rounded-lg px-8 py-4 z-90'> 
    <div className='flex items-center justify-center mb-6'>

         <Image 
                     src="/success.png" 
                     alt="Logo" 
                     width={102} 
                     height={102} 
                     priority 
                     className="drop-shadow-md"
                   />
        </div>
        <h1 className='text-2xl'>{message} </h1>

    </div>
    </div>
  )
}

export default SuccessfullDialog
