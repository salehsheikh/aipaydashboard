import React, { useState } from 'react';
import DataTable from '../DataTable';
import ComplianceInvestigate from '../dialogs/ComplianceInvestigate';
import ComplianceReport from '../dialogs/ComplianceReport'; 

const Monitoringtable = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedReportCase, setSelectedReportCase] = useState(null); 

  const monitoringDetails = [
    {
      caseId: 'Comp-0012',
      user: 'John Doe',
      amount: '$50',
      issueType: 'Unusual Transaction',
      status: 'Resolved',
      actionText: 'Investigate',
      buttonColor: 'blue',
      actionHandler: () => setSelectedCase('Comp-0012'),
      details: { 
        transactionId: 'TXN-0012',
        Paymentmethod: 'Credit Card',
        rsiklevel: 'High',
        amount: '$50',
      }
    },
    {
      caseId: 'Comp-0013',
      user: 'John Doe',
      amount: '$500',
      issueType: 'Multiple Failed',
      status: 'Open',
      actionText: 'Report',
      buttonColor: 'blue',
      actionHandler: () => setSelectedReportCase('Comp-0013'),
      details: { 
        transactionId: 'TXN-0013',
        reporttype: 'Compliance Violation',
        Paymentmethod: 'Bank Transfer',
        rsiklevel: 'Medium',
        userinvolved: 'Jane Smith',
        reason: 'Multiple failed transactions',
        status: 'Under Review',
        amount:'$5,000'
      }
    }
  ];

  const headers = ['Case Id', 'User', ' Amount', 'Issue Type', 'Status', 'Action'];
  
  const rows = monitoringDetails.map((monitoringDetail) => ({
    data: {
      'Case Id': monitoringDetail.caseId,
      'User': monitoringDetail.user,
      'Amount': monitoringDetail.amount,
      'Issue Type': monitoringDetail.issueType,
      'Status': monitoringDetail.status,
    },
    actionHandler: monitoringDetail.actionHandler,
    actionText: monitoringDetail.actionText,
    buttonColor: monitoringDetail.buttonColor
  }));

  // Find selected cases
  const selectedInvestigateDetail = monitoringDetails.find(d => d.caseId === selectedCase);
  const selectedReportDetail = monitoringDetails.find(d => d.caseId === selectedReportCase);

  return (
    <div className='w-auto -mt-4'>
      <DataTable headers={headers} rows={rows} />
      
      {selectedCase && (
        <ComplianceInvestigate
          compliance={{ details: selectedInvestigateDetail.details }}
          onClose={() => setSelectedCase(null)}
        />
      )}
      
      {selectedReportCase && (
        <ComplianceReport
          report={{ details: selectedReportDetail.details }}
          onClose={() => setSelectedReportCase(null)}
        />
      )}
    </div>
  );
};

export default Monitoringtable;