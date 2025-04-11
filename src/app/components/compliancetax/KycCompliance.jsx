'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Dropdown from '../../components/Dropdown';
import KycTable from './KycTable';

const KycCompliance = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('Date');
    const [statusFilter, setStatusFilter] = useState('Open');
    return (
        <>
        <div className='mt-4 z-10 p-4'>
            <div className="p-4 bg-[#FFFFFF] rounded-t-lg  flex justify-between items-center">
                {/* Left Side - Heading */}
                <h3 className="text-xl font-semibold text-gray-800">Kyc Compliance </h3>

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
                        options={['Today', 'Last Week','Last Month']}
                        selected={dateFilter}
                        setSelected={setDateFilter}
                        borderColor="border-[#247BA0]"
                    />

                    {/* Status Dropdown */}
                    <Dropdown
                        label="Status"
                        options={['Verified', 'Pending']}
                        selected={statusFilter}
                        setSelected={setStatusFilter}
                        borderColor="border-[#247BA0]"
                    />
                </div>
            </div>
        </div>
        <KycTable/>
        </>
    );
};

export default KycCompliance;
