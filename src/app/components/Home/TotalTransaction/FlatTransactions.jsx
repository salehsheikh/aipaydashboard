import React from 'react'
import DataTable from '../../DataTable';
const FlatTransactions = () => {
    const transactionDetails = [{
        paymentAmount: '$50',
        paymentMethod: 'Visa',
        totalTransaction:'320 transaction',
      },
      {
        paymentAmount: '$50',
        paymentMethod: 'Paypal',
        totalTransaction:'320 transaction',

      },
      {
        totalTransaction:'60 transaction',
        paymentAmount: '$500,000',
        paymentMethod: 'Google Pay',
     
      }
    ];
   const headers = [ 'Payment Method','Total Transactions', 'Total Amount' ];
   const rows = transactionDetails.map(Detail => ({
    data: {
     'Payment Method': Detail.paymentMethod,
     'Total Transactions':Detail.totalTransaction,
     'Total Amount': Detail.paymentAmount,
    }
  }));
 
    return (
    <div className='w-full mt-3'>
            <h3 className='text-md font-semibold m-3'> Flat Transactions</h3>

        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default FlatTransactions
