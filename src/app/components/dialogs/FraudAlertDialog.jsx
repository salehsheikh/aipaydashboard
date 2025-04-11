'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import {useDialog} from '../../hooks/useDialog';
import FreezeFundDialog from './FreezeFundDialog';

// Static transaction details structure
const FRAUD_DETAILS_CONFIG = [
  { name: 'Case ID', key: 'caseId' },
  { name: 'User', key: 'user' },
  { name: 'Email', key: 'email' },
  { name: 'Transaction', key: 'transaction' },
  { name: 'Amount', key: 'amount' },
  { name: 'Payment Method', key: 'Paymentmethod' },
  { name: 'Fraud Type', key: 'authCode' },
  { name: 'Risk Level', key: 'rsiklevel' },
  { name: 'Status', key: 'status' },
];

export default function FraudAlertDialog({ fraud, onClose }) {
  const [isSafe, setIsSafe] = useState(true);
  const fraudDialog = useDialog();

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-100">
   
      <div className="bg-white rounded-lg w-full max-w-lg mt-6 max-h-auto z-60">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Case Summary</h2>
          <button 
            onClick={onClose}
            className="text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[50vh] overflow-y-auto">
          {/* Account Summary */}
          <div className="bg-[#CF1742] mx-4 mt-3 p-3 rounded-lg">
            <div className="flex justify-between text-sm font-medium">
              <span>Name</span>
              <span>Value</span>
            </div>
          </div>

          {/* Details List */}
          <div className="p-4">
            {FRAUD_DETAILS_CONFIG.map(({ name, key }, index) => (
              <div 
                key={name}
                className={`flex justify-between py-2 ${
                  index !== FRAUD_DETAILS_CONFIG.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="text-gray-600 text-sm">{name}</span>
                <span className="font-medium text-gray-800 text-sm">
                  {fraud.details[key] || fraud[key]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="mb-6 flex items-center justify-between bg-[#09AA3421] p-3 rounded-md">
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
              onClick={fraudDialog.openDialog}
              className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white "
            >
              Freeze Funds
            </button>
            <button className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white ">
              Request More info
            </button>
          </div>
        </div>

        {/* Refund Dialog */}
        {fraudDialog.isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
            <FreezeFundDialog onClose={fraudDialog.closeDialog} />
          </div>
        )}
      </div>
    </div>
  );
}