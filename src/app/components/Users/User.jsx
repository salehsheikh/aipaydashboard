import React from 'react'
import DataTable from '../DataTable';

const User = () => {
    const userDetails = [{
       
        user: 'John Doe',
        location: 'New York',
        activityType: 'Ride Payment',
        lastActive: '5 Hours ago',
        paymentMethod: 'Visa',
      },
    {
        user: 'John Doe',
        location: 'New York',
        activityType: 'Ride Payment',
        lastActive: '5 Hours ago',
        paymentMethod: 'Paypal',
    }];
   const headers = ['User Name', 'Location','Activity Type', 'Last Active', 'Payment Method'];
   const rows = userDetails.map(userDetail => ({
    data: {
      'User Name': userDetail.user,
      'Location': userDetail.location,
      'Activity Type': userDetail.activityType,
      'Last Active': userDetail.lastActive,
      'Payment Method': userDetail.paymentMethod
    },
  }));
  
    return(
    <div className='w-full mt-16'>
        <h1 className='ml-4 mb-3'>Active Users</h1>
        <DataTable headers={headers} rows={rows} />
    
    </div> 
    )
}

export default User
