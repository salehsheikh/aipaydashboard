'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useDialog } from '../../hooks/useDialog';
import CryptoDelete from './CryptoDelete';
import UpdateExchangeDialog from './UpdateExchangeDialog';
import ModifyTransactionDialog from './ModifyTransactionDialog';
// Static transaction details structure
const CRYPTO_DETAILS_CONFIG = [
    { name: 'Coin ', key: 'coin' },
    { name: 'Symbol', key: 'symbol' },
    { name: 'Block Chain', key: 'blockChain' },
    { name: 'Status', key: 'status' },
    { name: 'Transaction Volume', key: 'transactionVolume' },
    { name: 'Transaction Fees', key: 'transactionFees' },
    { name: 'Exchange Rate (USD)', key: 'exchangeRate' },
    { name: 'Last Updated', key: 'lastUpdated' },
];

export default function EditCryptoModal({ crypto, onClose }) {
    const [isCryptoEnable, setIsCryptoEnable] = useState(true);
    const cryptoDialog = useDialog();
    const exchangeDialog = useDialog();
    const modifyTransactionDialog = useDialog();

    return (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-100">
            <div className="bg-white rounded-lg w-full max-w-lg max-h-screen">
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
                    <div className="bg-[#CF1742]  mx-4 mt-4 p-4 rounded-lg">
                        <div className="flex justify-between text-white text-sm font-medium">
                            <span>Name</span>
                            <span>Value</span>
                        </div>
                    </div>

                    {/* Details List */}
                    <div className="p-6">
                        {CRYPTO_DETAILS_CONFIG.map(({ name, key }, index) => (
                            <div
                                key={name}
                                className={`flex justify-between py-3 ${index !== CRYPTO_DETAILS_CONFIG.length - 1 ? 'border-b border-gray-200' : ''
                                    }`}
                            >
                                <span className="text-gray-600">{name}</span>
                                <span className="font-medium text-gray-800">
                                    {crypto.details[key] || crypto[key]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Section */}
                <div className="p-6 border-t border-gray-200">
                    <div className={`mb-2 flex items-center justify-between bg-[#09AA3421] p-3 rounded-md border-2 ${isCryptoEnable ? 'border-blue-500' : 'border-red-500'
                        }`}>
                        <span className="font-medium">
                            {isCryptoEnable ? 'Crypto Enabled' : 'Disabled'}
                        </span>
                        <button
                            onClick={() => setIsCryptoEnable(!isCryptoEnable)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isCryptoEnable ? 'bg-[#91c1c8]' : 'bg-gray-300'
                                }`}
                        >
                            <span className={`absolute h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${isCryptoEnable ? 'translate-x-6' : 'translate-x-1'
                                }`} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={exchangeDialog.openDialog}
                            className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white "
                        >
                            Update Exchange Rate
                        </button>
                        <button
                        onClick={modifyTransactionDialog.openDialog}
                        className="w-full bg-[#086788] py-2.5 rounded-lg font-medium text-white ">
                            Modify Transaction Fee
                        </button>
                        <button
                            onClick={cryptoDialog.openDialog}
                            className="w-full bg-[#F1D7D7] py-2.5 rounded-lg font-medium text-red-500 ">
                            Delete Currency
                        </button>
                    </div>
                </div>

                {/* delete */}
                {cryptoDialog.isOpen && (
                   
                        <CryptoDelete onClose={cryptoDialog.closeDialog} />
                   
                )}
                {exchangeDialog.isOpen && (
                        <UpdateExchangeDialog onClose={exchangeDialog.closeDialog} />
                  
                )}
                {modifyTransactionDialog.isOpen &&(
                    <ModifyTransactionDialog onClose={modifyTransactionDialog.closeDialog}/>
                )}

            </div>
        </div>
    );
}