'use client';

import { useState } from 'react';
import { Search, } from 'lucide-react';
import { methods, dates, types, sources } from '../constants/constant';
import { getFilteredStatuses, getHeaderTitle } from '../../helpers/headerHelpers';
import AddCryptoDialog from './dialogs/AddCryptoDialog';
import Dropdown from './Dropdown';
import { useDialog } from '../hooks/useDialog';
import SuccessfullDialog from './dialogs/Successfull';
import GenerateReport from './compliancetax/GenerateReport';
import RevenueTax from './compliancetax/RevenueTax';
export default function Header({ activeTab }) {
  const [method, setMethod] = useState(methods[0]);
  const [date, setDate] = useState(dates[0]);
  const [type, setType] = useState(types[0]);
  const [source, setSource] = useState(sources[0]);
  const filteredStatuses = getFilteredStatuses(activeTab);
  const headerTitle = getHeaderTitle(activeTab);

  const [status, setStatus] = useState(filteredStatuses[0]);

  const cryptoDialog = useDialog();
  const complianceDialog = useDialog();
  const successDialog = useDialog();

  const dropdownConfigs = [
    {
      label: 'Method',
      options: methods,
      selected: method,
      setSelected: setMethod,
      show: !['Fraud Alerts', 'Home','Revenue Stream', 'Crypto & Listing', 'Compliance & Tax', 'Payouts', 'Users'].includes(activeTab)
    },
    {
      label: 'Type',
      options: types,
      selected: type,
      setSelected: setType,
      show: !['Fraud Alerts', 'Home','Transactions', 'Crypto & Listing', 'Revenue Stream', 'Payouts', 'Users'].includes(activeTab)
    },
    {
      label: 'Date',
      options: dates,
      selected: date,
      setSelected: setDate,
      show: !['Fraud Alerts', 'Home','Payouts', 'Users'].includes(activeTab)
    },
    {
      label: 'Status',
      options: filteredStatuses,
      selected: status,
      setSelected: setStatus,
      show: !['Revenue Stream', 'Payouts','Home', 'Users'].includes(activeTab)
    },

    {
      label: 'Source',
      options: sources,
      selected: source,
      setSelected: setSource,
      show: !['Fraud Alerts', 'Transactions','Home', 'Crypto & Listing', 'Compliance & Tax', 'Payouts', 'Users'].includes(activeTab)
    },
  ];


  return (
    <>
      <div className={`w-full ${
        activeTab === 'Home' ? 'px-1' : 'px-4'
      }`}>
      <div
  className={`flex justify-between items-center ${
    activeTab === 'Home' ? '!pt-2' : 'pt-18'
  }`}
>
      {activeTab !== 'Users' && activeTab !== 'Home'&& activeTab !== 'Payouts' && (
    <h1 className="text-lg font-semibold">{headerTitle}</h1>
  )}
          {activeTab === 'Crypto & Listing' && (
            <button
              onClick={cryptoDialog.openDialog}
              className="flex items-center gap-2 bg-[#247BA0] text-white px-5 py-2.5 rounded-md text-sm"
            >
              Add New Crypto Currency
            </button>
          )}
          {activeTab === 'Compliance & Tax' && (
            <button
              onClick={complianceDialog.openDialog}
              className="flex items-center gap-2 bg-[#247BA0] text-white px-5 py-2.5 rounded-md text-sm"
            >
              Generate New Report
            </button>
          )}
        </div>
        {activeTab === 'Compliance & Tax' && <RevenueTax />}

        {activeTab !== 'Home' && (  // Only show if not Home
          <div className="my-3 rounded-t-lg p-4 relative z-10 flex items-center gap-4">
            <div className="flex items-center gap-4  ml-auto">
              {/* Search Field */}
              {!['Users', 'Payouts'].includes(activeTab) && (
                <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-md bg-white">
                  <Search size={16} className="text-[#247BA0]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none text-sm"
                  />
                </div>
              )}

              {/* Dropdowns */}
              {dropdownConfigs.map((config) => config.show && (
                <Dropdown
                  key={config.label}
                  label={config.label}
                  options={config.options}
                  selected={config.selected}
                  setSelected={config.setSelected}
                  borderColor="border-[#247BA0]"
                />
              ))}
            </div>
          </div>
        )}

      </div>
      {cryptoDialog.isOpen && (
        <AddCryptoDialog
          onClose={cryptoDialog.closeDialog}
          onSuccess={() => {
            cryptoDialog.closeDialog();
            successDialog.openDialog();
          }}
        />
      )}
      {complianceDialog.isOpen && (
        <GenerateReport
          onClose={complianceDialog.closeDialog}
        // onSuccess={() => {
        //   cryptoDialog.closeDialog();
        //   successDialog.openDialog();
        // }}
        />
      )}

      {successDialog.isOpen && (
        <SuccessfullDialog
          message=" Added Successfully"
          onClose={successDialog.closeDialog}
        />
      )}
    </>
  );
}

