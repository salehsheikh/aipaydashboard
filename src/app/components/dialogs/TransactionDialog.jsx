'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import {useDialog} from '../../hooks/useDialog';
import RefundDialog from './RefundDialog';

// Static transaction details structure
const TRANSACTION_DETAILS_CONFIG = [
  { name: 'Transaction ID', key: 'transactionId' },
  { name: 'Date', key: 'dateTime' },
  { name: 'Amount', key: 'amount' },
  { name: 'Payment Method', key: 'paymentMethod' },
  { name: 'Status', key: 'status' },
  { name: 'Card Number', key: 'cardNumber' },
  { name: 'Authorization Code', key: 'authCode' },
  { name: 'Currency', key: 'currency' },
  { name: 'Customer ID', key: 'customerId' },
];

export default function TransactionDialog({ transaction, onClose }) {
  const [isNonSuspicious, setIsNonSuspicious] = useState(true);
  const refundDialog = useDialog();

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-100">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-screen mt-6 z-100">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Transaction Summary</h2>
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
          <div className="bg-[#CF1742]  mx-4 mt-4 p-4 rounded-lg">
            <div className="flex justify-between text-sm text-white font-medium">
              <span>Name</span>
              <span>Value</span>
            </div>
          </div>

          {/* Details List */}
          <div className="p-6">
            {TRANSACTION_DETAILS_CONFIG.map(({ name, key }, index) => (
              <div 
                key={name}
                className={`flex justify-between py-3 ${
                  index !== TRANSACTION_DETAILS_CONFIG.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="text-gray-600 text-sm">{name}</span>
                <span className="font-medium text-gray-800 text-sm">
                  {transaction.details[key] || transaction[key]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="mb-6 flex items-center justify-between bg-[#09AA3421] p-3 rounded-md">
            <span className="font-medium">
              {isNonSuspicious ? 'Non-suspicious' : 'Flagged as suspicious'}
            </span>
            <button
              onClick={() => setIsNonSuspicious(!isNonSuspicious)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isNonSuspicious ? 'bg-[#91c1c8]' : 'bg-gray-300'
              }`}
            >
              <span className={`absolute h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                isNonSuspicious ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="space-y-3">
            <button
              onClick={refundDialog.openDialog}
              className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white "
            >
              Refund Transaction
            </button>
            <button className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white ">
              Download Receipt
            </button>
          </div>
        </div>

        {/* Refund Dialog */}
        {refundDialog.isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
            <RefundDialog onClose={refundDialog.closeDialog} />
          </div>
        )}
      </div>
    </div>
  );
}