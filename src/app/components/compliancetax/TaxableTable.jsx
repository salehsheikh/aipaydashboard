import React from 'react'
import DataTable from '../DataTable';

const TaxableTable = () => {
    const taxDetails = [{
        transactionId: 'Txn-0013',
        user: 'Saleh Shk',
        amount: '$500,000',
        taxRate:'10%',
        taxCollected:'$1000',
        date:'02/18/25',
        status:'Completed',
      },
      {
       
        transactionId: 'Txn-0013',
        user: 'John Doe',
        amount: '$500',
        taxRate:'10%',
        taxCollected:'$100',
        date:'02/18/25',
        status:'Pending',
      },
      {
       
        transactionId: 'Txn-0013',
        user: 'John Doe',
        amount: '$500',
        taxRate:'10%',
        taxCollected:'$100',
        date:'02/18/25',
        status:'Pending',
      },
      {
       
        transactionId: 'Txn-0013',
        user: 'John Doe',
        amount: '$500',
        taxRate:'10%',
        taxCollected:'$100',
        date:'02/18/25',
        status:'Pending',
      },
       {
       
        transactionId: 'Txn-0013',
        user: 'John Doe',
        amount: '$500',
        taxRate:'10%',
        taxCollected:'$100',
        date:'02/18/25',
        status:'Pending',
      },
      
    ];
   const headers = ['Transaction Id', 'User',' Amount','Tax Rate','Tax Collected', 'Date', 'Status'];
   const rows =taxDetails.map(detail => ({
    data: {
      'Transaction Id': detail.transactionId,
      'User': detail.user,
      'Amount': detail.amount,
      'Tax Rate': detail.taxRate,
      'Tax Collected': detail.taxCollected,
      'Date':detail.date,
      'Status':detail.status,
    },

  }));
 
    return (
    <div className='w-auto -mt-4'>
      
        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default TaxableTable
