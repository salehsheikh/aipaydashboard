'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Dropdown from '../../components/Dropdown';
import MonitoringTable from './MonitoringTable'

const ComplianceMonitoring = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('Type');
    const [statusFilter, setStatusFilter] = useState('Open');
    return (
        <>
        <div className='mt-4 z-10 p-4'>
            <div className="p-4 bg-[#FFFFFF] rounded-t-lg  flex justify-between items-center">
                {/* Left Side - Heading */}
                <h3 className="text-xl font-semibold text-gray-800">User Compliance Monitoring</h3>

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
                        label="Type"
                        options={['Unusual', 'Multiple']}
                        selected={typeFilter}
                        setSelected={setTypeFilter}
                        borderColor="border-[#247BA0]"
                    />

                    {/* Status Dropdown */}
                    <Dropdown
                        label="Status"
                        options={['Resolved', 'Open']}
                        selected={statusFilter}
                        setSelected={setStatusFilter}
                        borderColor="border-[#247BA0]"
                    />
                </div>
            </div>

         


        </div>
        <MonitoringTable/>
        </>
    );
};

export default ComplianceMonitoring;
