'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

const AddCryptoDialog = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    coinName: '',
    symbol: '',
    blockchainType: '',
    transactionFee: '',
    status: 'active'
  });
  const cryptoOptions = [
    'Bitcoin',
    'Ethereum',
    'Litecoin',
    'Ripple',
    'Cardano'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg w-full max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-center p-2 border-b border-gray-300">
            <h1 className="text-sm font-semibold">Add New Cryptocurrency</h1>
            <button
              onClick={onClose}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-3">
            {/* Coin Name Section */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm  text-gray-700">Coin Name</label>
                <label className="block text-sm  text-gray-700">Symbol</label>
              </div>
              <div className="flex gap-4">
                <select
                  value={formData.coinName}
                  onChange={(e) => setFormData({ ...formData, coinName: e.target.value })}
                  className="w-1/2 p-1 border-2 border-blue-500 rounded-md"
                >
                  <option value="">Select Coin</option>
                  {cryptoOptions.map(coin => (
                    <option key={coin} value={coin}>{coin}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Enter Symbol"
                  value={formData.symbol}
                  onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                  className="w-1/2 p-1 border-2 border-blue-500 rounded-md"
                />
              </div>
            </div>

            {/* Blockchain & Fee Section */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm  text-gray-700">Blockchain Type</label>
                <label className="block text-sm  text-gray-700">Transaction Fee (%)</label>
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Blockchain Type"
                  value={formData.blockchainType}
                  onChange={(e) => setFormData({ ...formData, blockchainType: e.target.value })}
                  className="w-1/2 p-1 border-2 border-blue-500 rounded-md"
                />
                <input
                  type="number"
                  placeholder="0.00"
                  value={formData.transactionFee}
                  onChange={(e) => setFormData({ ...formData, transactionFee: e.target.value })}
                  className="w-1/2 p-1 border-2 border-blue-500 rounded-md"
                />
              </div>
            </div>

            {/* Status Section */}
            <div className="space-y-2 w-1/2">
              <label className="block text-sm  text-gray-700">Initial Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full p-1 border-2 border-blue-500 rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-1/2">
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#F1D7D7] text-red-700 py-3 rounded-lg "
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onSuccess}
                className="w-full bg-[#086788] text-white py-3 rounded-lg  "
              >
                Save & Publish
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCryptoDialog;