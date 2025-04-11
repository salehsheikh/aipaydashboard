'use client';

import { useState } from 'react';
import TotalPayouts from '../../components/payouts/TotalPayouts';
import { ArrowLeft, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PaymentsChart from '../../components/Users/PaymentsChart';
import Dropdown from '../../components/Dropdown';
import Navbar from '../../components/Navbar';

const Payouts = () => {
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('Today');
  const [statusFilter, setStatusFilter] = useState('Completed');

  const handleRoute = () => {
    router.push('/');
  };

  return (<>
    <Navbar/>
    <div className='bg-[#F7F7F7]  px-4 py-20  '>
      {/* Header */}
      <div className="flex items-center p-3 gap-2">
        <ArrowLeft size={20} className="text-gray-600 cursor-pointer" onClick={handleRoute} />
        <h2 className="text-lg font-semibold text-gray-800">Total Payouts</h2>
      </div>
      {/* Filters */}


      <div className="p-4   flex justify-between items-center">
        {/* Left Side - Heading */}
        <h3 className="text-xl font-semibold text-gray-800">Payout Transactions</h3>

        {/* Right Side - Filters */}
        <div className="flex  gap-4 items-center">
          {/* Search Field */}
          <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-md bg-white w-full max-w-xs">
            <Search size={16} className="text-[#247BA0]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Date Dropdown */}
          <Dropdown
            label="Date"
            options={['Today', 'Weekly', 'Monthly']}
            selected={dateFilter}
            setSelected={setDateFilter}
            borderColor="border-[#247BA0]"
          />

          {/* Status Dropdown */}
          <Dropdown
            label="Status"
            options={['Completed', 'Delayed', 'Pending']}
            selected={statusFilter}
            setSelected={setStatusFilter}
            borderColor="border-[#247BA0]"
          />
        </div>
      </div>

      {/* Data Components */}
     
      <TotalPayouts />
      <PaymentsChart />
    </div>
    </>
  );
};

export default Payouts;
