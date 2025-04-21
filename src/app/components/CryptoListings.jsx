'use client';
import { useState } from 'react';
import DataTable from './DataTable';
import EditCryptoModal from './dialogs/EditCryptoModal'
export default function CryptoListings() {
  
  const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [showDialog, setShowDialog] = useState(false);

  const headers = ['Coin', 'Symbol', 'Status', 'Transaction Volume', 'Last Updated', 'Action'];
  
  const cryptos = [{
    coin: 'Bitcoin',
    symbol: 'BTC',
    status: 'Active',
    transactionVolume: '$500,000',
    lastUpdated: '02/08/2025',
  details: {
    transactionFees: '0.5 % transfer',
    exchangeRate: '$48,500',
    blockChain: 'Bitcoin Network',
  },
  
}];
  const rows = cryptos.map(crypto=>({
      data: {
      
      'Coin': crypto.coin,
       'Symbol':crypto.symbol, 
       'Status': crypto.status, 
       'Transaction Volume':crypto.transactionVolume,
        'Last Updated':crypto.lastUpdated,
      },
      actionText: 'Edit',
      buttonColor: 'blue',
      statusColor: 'green',
      actionHandler: () => {
        setSelectedCrypto(crypto);
        setShowDialog(true);
      }

    }
  ))


  return  (
      <div className="w-full">
        <DataTable headers={headers} rows={rows} />
        
        {showDialog && selectedCrypto && (
          <EditCryptoModal
            crypto={selectedCrypto}
            onClose={() => {
              setShowDialog(false);
              setSelectedCrypto(null);
            }}
          />
        )}
      </div>
  )
}