'use client';
import { useState, useRef } from 'react';
import { CalendarRange, X } from 'lucide-react';
import UniformWave from '../UniformWave';
import SuccessfullDialog from './Successfull';

export default function ModifyTransactionDialog({ onClose }) {

    const [effectiveDate, setEffectiveDate] = useState('');
    const [notes, setNotes] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const dateInputRef = useRef(null);

    const handleCalendarClick = () => {
        dateInputRef.current.showPicker();
    };
    const handleConfirmSave = () => {

        setShowSuccess(true);
    }

    return (
        <>
            <div className="fixed inset-0 backdrop-blur-md bg-[#F7F7F7] flex items-center justify-center p-4">
                <UniformWave className="z-0" />
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 z-10">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2 className="text-lg font-semibold">Modify Transaction Fees</h2>
                        <button onClick={onClose} className="text-red-500">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="mt-1 space-y-3">
                        <h1 className='font-semibold'>Update the processing fees for different payment types.</h1>

                        {/* Transaction Fees Header */}
                        <div className='border border-gray-300 rounded-md'>
                            <div className="bg-[#CE2323] text-white rounded-t-md p-3 grid grid-cols-3 gap-4 font-semibold text-sm">
                                <span>Transaction Type</span>
                                <span>Current Fee</span>
                                <span>New Fee</span>
                            </div>

                            {/* Rows Container */}
                            <div>

                            </div>
                            <div >
                                {/* Fiat Row */}
                                <div className="grid grid-cols-3 gap-4 items-center p-3 border-b border-gray-200">
                                    <span className="text-sm">Fiat (USD/EUR)</span>
                                    <span className="text-sm">2.5%</span>
                                    <input
                                        type="text"
                                        placeholder="Enter New %"
                                        className="border-2 border-blue-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Crypto Row */}
                                <div className="grid grid-cols-3 gap-5 items-center p-2 border-b border-gray-200">
                                    <span className="text-sm">Crypto (BTC/ETH)</span>
                                    <span className="text-sm">1%</span>
                                    <input
                                        type="text"
                                        placeholder="Enter New %"
                                        className="border-2 border-blue-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* P2P Row */}
                                <div className="grid grid-cols-3 gap-5 items-center p-2">
                                    <span className="text-sm">P2P transfer</span>
                                    <span className="text-sm">0.5%</span>
                                    <input
                                        type="text"
                                        placeholder="Enter New %"
                                        className="border-2 border-blue-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Effective Date */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Effective Date"
                                className="w-full border-2 border-blue-300 rounded-md p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                value={effectiveDate}
                                readOnly
                            />
                            <button
                                onClick={handleCalendarClick}
                                className="absolute right-3 top-2 text-blue-500 hover:text-blue-700 transition-colors"
                            >
                                <CalendarRange size={20} />
                            </button>
                            <input
                                type="date"
                                ref={dateInputRef}
                                className="absolute right-20 opacity-0 -z-10"
                                onChange={(e) => setEffectiveDate(e.target.value)}
                            />
                        </div>

                        {/* Notes */}
                        <label className="block font-medium text-sm">Notes</label>
                        <textarea
                            placeholder='enter addditional notes for investigation'
                            className="w-full border-2 border-blue-300 rounded-md p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3 mt-4">
                        <button
                            onClick={handleConfirmSave}
                            className="w-full bg-[#086788]  py-2.5 rounded-lg font-medium text-white ">
                            Save New Fees
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full bg-red-100 hover:bg-red-200 py-2.5 rounded-lg font-medium text-red-600 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            {showSuccess && (
                <SuccessfullDialog
                    message="Saved Successfully!"
                    onClose={() => setShowSuccess(false)}
                />
            )}
        </>
    );
}