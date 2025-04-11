'use client';
import { useState } from 'react';
import DataTable from './DataTable';
import FraudAlertDialog from './dialogs/FraudAlertDialog'; 

export default function FraudAlerts() {
  const [selectedFraud, setSelectedFraud] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  // Static fraud data with details
  const fraudCases = [{
    id: 'TxN-0123',
    user: 'John Doe',
    amount: '$250.00',
    reason: 'Multiple failed logins',
    status: 'Resolved',
    details: {
      caseId: 'TxN-0123',
      email: 'john.doe@example.com',
      transaction: 'TX-987654',
      Paymentmethod: 'Credit Card',
      authCode: 'AUTH-789',
      rsiklevel: 'High',
      status: 'Open'
    }
  }];

  const headers = ['Case ID', 'User', 'Amount', 'Reason', 'Status', 'Action'];
  
  const rows = fraudCases.map(fraudCase => ({
    data: {
      'Case ID': fraudCase.id,
      'User': fraudCase.user,
      'Amount': fraudCase.amount,
      'Reason': fraudCase.reason,
      'Status': fraudCase.status
    },
    actionText: 'Investigate',
    buttonColor: 'blue',
    statusColor: 'green',
    actionHandler: () => {
      setSelectedFraud(fraudCase);
      setShowDialog(true);
    }
  }));

  return (
    <div className="w-full">
      <DataTable headers={headers} rows={rows} />
      
      {showDialog && selectedFraud && (
        <FraudAlertDialog 
          fraud={selectedFraud}
          onClose={() => {
            setShowDialog(false);
            setSelectedFraud(null);
          }}
        />
      )}
    </div>
  );
}