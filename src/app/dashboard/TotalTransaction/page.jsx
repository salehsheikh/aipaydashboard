'use client';

import { useState } from 'react';
import TotalTransaction from '../../components/Home/TotalTransaction/TotalTransaction';
import Refunds from '../../components/Home/TotalTransaction/Refunds';
import { ArrowLeft, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Dropdown from '../../components/Dropdown';
import Navbar from '../../components/Navbar';
import FlatTransactions from '../../components/Home/TotalTransaction/FlatTransactions';
import CryptoTransactions from '../../components/Home/TotalTransaction/CryptoTransactions';
import PaymentDistributions from '../../components/Home/TotalTransaction/PaymentDistributions';
import TransactionChart from '../../components/Home/TransactionChart';
const Page = () => {
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('Today');
  const [statusFilter, setStatusFilter] = useState('Completed');
  const [methodFilter,setMethodfilter]=useState('Dhl');

  const handleRoute = () => {
    router.push('/');
  };

  return (<>
    <Navbar/>
    <div className='bg-[#F7F7F7]  px-4 py-20  '>
      {/* Header */}
      <div className="flex items-center p-3 gap-2">
        <ArrowLeft size={20} className="text-gray-600 cursor-pointer" onClick={handleRoute} />
        <h2 className="text-lg font-semibold text-gray-800">Total Transactions</h2>
      </div>
      {/* Filters */}


      <div className="p-4   flex justify-between items-center">
        {/* Left Side - Heading */}
        <h3 className="text-xl font-semibold text-gray-800"> Transactions</h3>

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

          <Dropdown
            label="Method"
            options={['Dhl', 'Paypal']}
            selected={methodFilter}
            setSelected={setMethodfilter}
            borderColor="border-[#247BA0]"
          />
          {/* Date Dropdown */}
          <Dropdown
            label="Date Range"
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
     
      <TotalTransaction/>
      <Refunds/>
      <div className='grid  md:grid-cols-2 grid-cols-1 pt-6 '>
       <div> <FlatTransactions/></div>
       <div ><CryptoTransactions/></div>
      </div>
      <div className='grid  md:grid-cols-2 grid-cols-1 pt-6 gap-2 m-2'>
       <div>  <PaymentDistributions/></div>
       <div ><TransactionChart/></div>
      </div>
     

    </div>
    </>
  );
};

export default Page;
