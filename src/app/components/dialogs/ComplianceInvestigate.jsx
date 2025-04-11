'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import {useDialog} from '../../hooks/useDialog';
import FreezeFundDialog from './FreezeFundDialog';
import ComplianceInfo from './ComplianceInfo';
// Static transaction details structure
const COMPLIANCE_DETAILS_CONFIG = [
  { name: 'Transaction ID', key: 'transactionId' },
  { name: 'Amount', key: 'amount' },
  { name: 'Payment Method', key: 'Paymentmethod' },
  { name: 'Risk Level', key: 'rsiklevel' },
];

export default function ComplianceInvestigate({ compliance, onClose }) {
  const [isSafe, setIsSafe] = useState(true);
  const investigateDialog = useDialog();
  const moreInfoDialog=useDialog();

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-50">
   
      <div className="bg-white rounded-lg w-full max-h-[80vh] max-w-md mt-6 z-60">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Investigate Comp-001</h2>
          <button 
            onClick={onClose}
            className="text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className=" overflow-y-auto">
          {/* Account Summary */}
          <div className="bg-[#CF1742] mx-4 mt-4 p-3 rounded-lg">
            <div className="flex justify-between text-white text-sm font-medium">
              <span>Name</span>
              <span>Value</span>
            </div>
          </div>

          {/* Details List */}
          <div className="p-4">
            {COMPLIANCE_DETAILS_CONFIG.map(({ name, key }, index) => (
              <div 
                key={name}
                className={`flex justify-between py-2 ${
                  index !== COMPLIANCE_DETAILS_CONFIG.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="text-gray-600 text-sm">{name}</span>
                <span className="text-sm text-gray-800">
                  {compliance.details[key] || compliance[key]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="p-3 border-t border-gray-200">
          <div className="mb-3 flex items-center justify-between bg-[#09AA3421] p-2 rounded-md">
            <span className="font-medium">
              {isSafe ? 'Marked Safed' : 'Un safe'}
            </span>
            <button
              onClick={() => setIsSafe(!isSafe)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isSafe? 'bg-[#91c1c8]' : 'bg-gray-300'
              }`}
            >
              <span className={`absolute h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                isSafe ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="space-y-3">
            <button
              onClick={investigateDialog.openDialog}
              className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white "
            >
              Freeze Funds
            </button>
            <button 
            onClick={moreInfoDialog.openDialog}
            className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white ">
              Request More info
            </button>
          </div>
        </div>


        {investigateDialog.isOpen && (
            <FreezeFundDialog onClose={investigateDialog.closeDialog} />
        )}

        {moreInfoDialog.isOpen &&(
          <ComplianceInfo onClose={moreInfoDialog.closeDialog}/>
        )}
      </div>
    </div>
  );
}