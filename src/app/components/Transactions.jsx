'use client';
import { useState } from 'react';
import DataTable from './DataTable';
import TransactionDialog from './dialogs/TransactionDialog';

// Static transaction data
const STATIC_TRANSACTIONS = [{
  id: 'TxN-0123',
  user: 'John Doe',
  amount: '$250.00',
  method: 'Paypal',
  status: 'Completed',
  date: '02/15/2025',
  details: {
    transactionId: 'TX-123456',
    dateTime: '2024-03-20 14:30:00',
    paymentMethod: 'Credit Card',
    cardNumber: '**** **** **** 1234',
    authCode: 'AUTH-789',
    currency: 'USD',
    customerId: 'CUST-456'
  }
}];

export default function Transactions() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const headers = ['Transaction ID', 'User', 'Amount', 'Method', 'Status', 'Date', 'Action'];
  
  const rows = STATIC_TRANSACTIONS.map(transaction => ({
    data: {
      'Transaction ID': transaction.id,
      'User': transaction.user,
      'Amount': transaction.amount,
      'Method': transaction.method,
      'Status': transaction.status,
      'Date': transaction.date
    },
    actionText: 'View',
    buttonColor: 'blue',
    actionHandler: () => {
      setSelectedTransaction(transaction);
      setShowDialog(true);
    }
  }));

  return (
    <div className="w-full">
      <DataTable headers={headers} rows={rows} />
      
      {showDialog && selectedTransaction && (
        <TransactionDialog 
          transaction={selectedTransaction}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}