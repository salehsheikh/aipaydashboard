import React from 'react'
import DataTable from '../../DataTable';


const TotalTransaction = () => {
    const transactionDetails = [{
       
        transactionId: 'Txn-00123',
        userName: 'John Doe',
        TransactionType: 'Ride Payment',
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        status:'Completed'
      },
      {
       
        transactionId: 'Txn-00124',
        userName: 'John Doe',
        TransactionType: 'Ride Payment',
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        status:'Delayed'
      },
      {
       
        transactionId: 'Txn-00125',
        userName: 'John Doe',
        TransactionType: 'Ride Payment',
        paymentAmount: '$50',
        paymentMethod: 'Dhl',
        status:'Pending'
      }
    ];
   const headers = ['Transaction Id', 'User Name','Transaction Type', 'Payment Amount', 'Payment Method' ,'Status','Action'];
   const rows = transactionDetails.map(Detail => ({
    data: {
      'Transaction Id': Detail.transactionId,
      'User Name': Detail.userName,
      'Transaction Type': Detail.TransactionType,
      'Payment Amount': Detail.paymentAmount,
      'Payment Method': Detail.paymentMethod,
      'Status':Detail.status
    },
    actionText: 'View',
    buttonColor: 'blue',
  }));
 
    return (
    <div className='w-full mt-3'>
        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default TotalTransaction
