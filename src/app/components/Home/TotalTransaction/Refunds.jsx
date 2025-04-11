import React from 'react'
import DataTable from '../../DataTable';

const Refunds = () => {
    const chargeBackDetails=[{
        flaggedTransaction:'Txn-9999',
        reason:'Over Charge',
        status:"Approved",
        chargeAlerts:"Bank Chargeback",
         automatedManual:"Manual Approval",

        },
        {
            flaggedTransaction:'Txn-9997',
            reason:'Ride Dispute',
                status:"Denied",
             chargeAlerts:"Visa Reversal",
             automatedManual:"✅Auto-Processed",
            }
    ] ;
    const headers=['Flagged Transactions','Reason Of Refund', 'Refund Status','Charge Back Alerts','Automated/Manual','Action'];
    const rows=chargeBackDetails.map(Details=>({
        data:{
            'Flagged Transactions':Details.flaggedTransaction,
            'Reason':Details.reason,
            'Status':Details.status,
            'Charge Back Alerts':Details.chargeAlerts,
            'Automated/Manual':Details.automatedManual
        },
        actionText: 'View',
        buttonColor: 'blue',

    }))
  return (
   <div className='w-full mt-3'>
    <h3 className='text-md font-semibold m-3'> Refunds & Charge Backs</h3>
           <DataTable headers={headers} rows={rows} />
       
       </div> 
  )
}

export default Refunds;
