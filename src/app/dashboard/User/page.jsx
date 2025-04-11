"use client"
import { ArrowLeft } from 'lucide-react'
import PaymentsChart from '../../components/Users/PaymentsChart'
import User from '../../components/Users/User'
import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'


const Users = () => {
  const router =useRouter();
  const handleRoute=()=>{
    router.push('/');
  }
  return (
    <>
    <Navbar/>
    <div className='bg-[#F7F7F7] px-4 py-20'>
         <div className="flex items-center p-3 gap-2">
     <ArrowLeft size={20} className="text-gray-600 cursor-pointer" onClick={handleRoute}/>
     <h2 className="text-lg font-semibold text-gray-800">Active User</h2>
   </div>
      <PaymentsChart/>
      <User/>
    </div>
    </>
  )
}

export default Users
