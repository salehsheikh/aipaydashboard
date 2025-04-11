import React from 'react'
import DataTable from '../DataTable';
import RevenueChart from './RevenueChart';

const RevenueDetails = () => {
    const revenueDetails = [{
       
        transactiontype: 'Ride payments',
        totalTransactions: '$4,500 transatctions',
        revenueGenerated: '$1,200,000',
      },
    {
        transactiontype: 'Send money fee',
        totalTransactions: '$4,500 transatctions',
        revenueGenerated: '$1,200,000',
    }];
   const headers = ['Transaction Type', 'Total Transactions', 'Revenue Generated'];
   const rows = revenueDetails.map(revenueDetail => ({
    data: {
      'Transaction Type': revenueDetail.transactiontype,
      'Total Transactions': revenueDetail.totalTransactions,
      'Revenue Generated': revenueDetail.revenueGenerated,
      
    },
  }));
  
    return(
        <div className='bg-[#F7F7F7]'>
 
    
        <DataTable headers={headers} rows={rows} />
    
  
    <RevenueChart/>
    </div>
    )
}

export default RevenueDetails;
