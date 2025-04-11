import React from 'react'
import DataTable from '../../DataTable';
const CryptoTransactions = () => {
    const transactionDetails = [{
        paymentAmount: '$50',
       cryptoCurrency: 'BTC',
        totalTransaction:'320 transaction',
      },
      {
        paymentAmount: '$50',
       cryptoCurrency: 'ETH',
        totalTransaction:'320 transaction',

      },
      {
        totalTransaction:'60 transaction',
        paymentAmount: '$500,000',
       cryptoCurrency: 'SOL',
     
      }
    ];
   const headers = [ 'Crypto Currency','Total Transactions', 'Total Amount' ];
   const rows = transactionDetails.map(Detail => ({
    data: {
     'Crypto Currency': Detail.cryptoCurrency,
     'Total Transactions':Detail.totalTransaction,
     'Total Amount': Detail.paymentAmount,
    }
  }));
 
    return (
    <div className='w-full mt-3'>
            <h3 className='text-md font-semibold m-3'> Crypto Transactions</h3>

        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default CryptoTransactions
