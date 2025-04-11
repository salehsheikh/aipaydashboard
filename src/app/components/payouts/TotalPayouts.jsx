import React from 'react'
import DataTable from '../DataTable';

const TotalPayouts = () => {
    const payoutDetails = [{
       
        transactionId: 'Txn-00123',
        userName: 'John Doe',
        TransactionType: 'Ride Payment',
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        status:'completed'
      },
      {
       
        transactionId: 'Txn-00123',
        userName: 'John Doe',
        TransactionType: 'Ride Payment',
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        status:'failed'
      }
    ];
   const headers = ['Transaction Id', 'User Name','Transaction Type', 'Payment Amount', 'Payment Method' ,'Status'];
   const rows = payoutDetails.map(payoutDetail => ({
    data: {
      'Transaction Id': payoutDetail.transactionId,
      'User Name': payoutDetail.userName,
      'Transaction Type': payoutDetail.TransactionType,
      'Payment Amount': payoutDetail.paymentAmount,
      'Payment Method': payoutDetail.paymentMethod,
      'Status':payoutDetail.status
    },
  }));
 
    return (
    <div className='w-full mt-3'>
        <h1 className='ml-4 mb-3'>Payout Transactions</h1>
        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default TotalPayouts
