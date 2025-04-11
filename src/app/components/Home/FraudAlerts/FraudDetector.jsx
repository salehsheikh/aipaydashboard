import React from 'react'
import DataTable from '../../DataTable';


const FraudDetector = () => {
    const fraudDetails = [{
       
        transactionId: 'Txn-00123',
        userName: 'John Doe',
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        dateTime:"12 Mar 2025, 10:30 AM",
        flafReason:'Multiple failed attempts',
        status:'76%'
      },
      {
       
        transactionId: 'Txn-00123',
        userName: 'John Doe',
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        dateTime:"12 Mar 2025, 10:30 AM",
        flafReason:'Large-unusual-transaction',
        status:'76%'
      },
    
    ];
   const headers = ['User Name','Transaction Id','Payment Method' , 'Amount','Date & Time','Reason For Flagging', 'Risk Score', 'Action'];
   const rows = fraudDetails.map(Detail => ({
    data: {
      'User Name': Detail.userName,
      'Transaction Id': Detail.transactionId,
      'Payment Method': Detail.paymentMethod,
      'Amount': Detail.paymentAmount,
      'Date & Time':Detail.dateTime,
      'Reason For Flagging':Detail.flafReason,
      'Status':Detail.status
    },
    actionText: 'Investigate',
    buttonColor: 'blue',
    statusColor: 'green',
  }));
 
    return (
    <div className='w-full mt-3'>
        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default FraudDetector
