'use client';
import DataTable from './DataTable';
import ComplianceMonitoring from './compliancetax/ComplianceMonitoring';
import KycCompliance from './compliancetax/KycCompliance';
import TaxableTransaction from './compliancetax/TaxableTransaction';
export default function ComplianceTax() {
  const headers = ['Report ID', 'Type', 'Period', 'Tax Collected', 'Status', 'Download'];
  const rows = [{
    data: {
      'Report ID': 'Tax-2025-01',
      'Type': 'Monthly Tax Report',
      'Period': 'Feb 2025',
      'Tax Collected': '$8,500',
      'Status': 'Completed'
    },
    actionText: 'Download',
    buttonColor: 'blue',
    actionHandler: () => console.log('Download clicked')
  }];

  return (
  <>
    <h3 className='mt-[-60px] ml-8 flex items-center font-semibold'>Tax Reports Table</h3>
    <div className='mt-3'>
    <DataTable headers={headers} rows={rows}  />
    </div>
    <ComplianceMonitoring/>
    <KycCompliance/>
    <TaxableTransaction/>
    
  </>

   
 

);
}