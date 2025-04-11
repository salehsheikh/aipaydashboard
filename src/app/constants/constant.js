//header constant 
export const methods = ['DHL', 'Paypal'];
export const dates = ['Today', 'Last Week', 'Last Month'];
export const statuses = ['Completed', 'Delayed', 'Pending','Resolved','Open','Active','Disabled','Complete','Pending'];
export const types = ['Monthly', 'Quarterly'];
export const sources=['Rides','Crypto'];
export const statusFilters = {
  'Fraud Alerts': ['Resolved', 'Open'],
  'Crypto & Listing': ['Active', 'Disabled'],
  'Compliance & Tax': ['Complete', 'Pending'],
  'Transactions': ['Complete', 'Delayed', 'Pending']
};

export const headerTitles = {
  'Transactions': 'Transactions',
  'Fraud Alerts': 'Fraud cases',
  'Crypto & Listing': 'Crypto listings',
  'Compliance & Tax': 'Financial reports overview',
  'Revenue Stream':'Revenue Breakdown',

};
// sidebar constant
import { Home, ShieldAlert, Bitcoin, ReceiptText,CalendarSync, ShieldCheck,UsersRound, ChartNoAxesCombined, LogOut } from 'lucide-react';

export const menuItems = [
  { name: 'Home', icon: Home },
  { name: 'Transactions', icon: ReceiptText },
  { name: 'Users', icon: UsersRound },
  {name: 'Payouts', icon: CalendarSync},
  { name: 'Fraud Alerts', icon: ShieldAlert },
  { name: 'Crypto & Listing', icon: Bitcoin },
  { name: 'Compliance & Tax', icon: ShieldCheck },
  { name: 'Revenue Stream', icon: ChartNoAxesCombined },
  // { name: 'Logout', icon: LogOut, logout: true }
];

