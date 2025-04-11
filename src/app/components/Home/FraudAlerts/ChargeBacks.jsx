import React from 'react'
import DataTable from '../../DataTable';

const ChargeBacks = () => {
    const chargeBackDetails=[{
        userName:'Saleh shk',
        reason:'Large Unusual Transaction',
        dateTime:"12 Mar 2025, 10:30 AM",
        status:"In Review"


        },
        {
            userName:'Usman shk',
            reason:'Multiple failed logins',
            dateTime:"12 Mar 2025, 10:30 AM",
            status:"Disabled"
            }
    ] ;
    const headers=['User Name','Reason','Date & Time','Refund Status'];
    const rows=chargeBackDetails.map(Details=>({
        data:{
            'User Name':Details.userName,
            'Reason':Details.reason,
            ' Date & Time':Details.dateTime,
            'Status':Details.status


        }

    }))
  return (
   <div className='w-full mt-3'>
    <h3 className='text-xl font-semibold m-3'> Refunds & Charge Backs</h3>
           <DataTable headers={headers} rows={rows} />
       
       </div> 
  )
}

export default ChargeBacks;
