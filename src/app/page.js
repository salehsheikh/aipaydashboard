'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Transactions from './components/Transactions';
import FraudAlerts from './components/FraudAlerts';
import CryptoListings from './components/CryptoListings';
import ComplianceTax from './components/ComplianceTax';
import RevenueDetails from './components/Revenue/RevenueDetails';
import Home from './components/Home/Home';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('Home');
  const [showHeader, setShowHeader] = useState(false);

  // Sync tab state with URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      // Decode and format tab name
      const decodedTab = decodeURIComponent(tabParam)
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Handle special cases for ampersand formatting
      const formattedTab = decodedTab
        .replace(/ And /g, ' & ')
        .replace(/ And$/g, ' & Tax');

      setActiveTab(formattedTab);
      setShowHeader([
        'Home', 'Transactions', 'Fraud Alerts', 
        'Crypto & Listing', 'Compliance & Tax',
        'Revenue Stream'
      ].includes(formattedTab));
    }
  }, [searchParams]);

  const handleTabClick = (tabName) => {
    if (tabName === 'Users') {
      router.push('/dashboard/User');
    } else if (tabName === 'Payouts') {
      router.push('/dashboard/Payouts');
    } else {
      // Encode for URL
      const formattedTab = tabName
        .replace(/ /g, '-')
        .replace(/&/g, 'and')
        .toLowerCase();
      
      router.push(`?tab=${formattedTab}`, { shallow: true });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex bg-[#FFFFFF]">
        <div className="w-56"> 
          <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
        <div className="flex-1 mt-2 bg-[#F7F7F7]">
          {showHeader && <Header activeTab={activeTab} />}
          {activeTab === 'Home' && <Home />}
          {activeTab === 'Transactions' && <Transactions />}
          {activeTab === 'Fraud Alerts' && <FraudAlerts />}
          {activeTab === 'Crypto & Listing' && <CryptoListings />}
          {activeTab === 'Compliance & Tax' && <ComplianceTax />}
          {activeTab === 'Revenue Stream' && <RevenueDetails />}
        </div>
      </div>
    </div>
  );
};

export default Page;