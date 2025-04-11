import React, { useState } from 'react';
import DataTable from '../DataTable';
import KycVerification from '../dialogs/KycVerification'
import ComplianceRequestModal from '../dialogs/ComplianceRequestModal';

const KycTable = () => {
  const [isKycModalOpen, setIsKycModalOpen] = useState(false);
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleNext = () => {
    setIsKycModalOpen(false);
    setIsComplianceModalOpen(true);
  };
  const kycDetails = [
    {
      user: 'John Doe',
      status: 'Verified',
      transactions: '$50,000',
      lastActivity: '02/18/2025',
      actionText: 'View',
      buttonColor: 'blue',
      actionHandler: () => console.log('View clicked')
    },
    {
      user: 'Jane Smith',
      status: 'Pending',
      transactions: '$500',
      lastActivity: '02/18/2025',
      actionText: 'Request Kyc',
      buttonColor: 'blue',
      actionHandler: () => {
        setSelectedUser('Jane Smith');
        setIsKycModalOpen(true);
      }
    },
  ];

  const headers = ['User', 'Kyc Status', 'Transactions', 'Last Activity', 'Action'];
  
  const rows = kycDetails.map(detail => ({
    data: {
      'User': detail.user,
      'Kyc Status': detail.status,
      'Transactions': detail.transactions,
      'Last Activity': detail.lastActivity
    },
    actionHandler: detail.actionHandler,
    actionText: detail.actionText,
    buttonColor: detail.buttonColor
  }));

  return (
    <div className='w-auto -mt-4'>
      <DataTable headers={headers} rows={rows} />
      
      <KycVerification
        isOpen={isKycModalOpen}
        onClose={() => setIsKycModalOpen(false)}
        onNext={handleNext}
      />
      
      <ComplianceRequestModal
        isOpen={isComplianceModalOpen}
        onClose={() => setIsComplianceModalOpen(false)}
      />
      
    </div>
  );
}

export default KycTable;