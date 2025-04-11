import { UsersRound, Box, ChartSpline } from 'lucide-react';
import RevenueCard from './RevenueCard';
export default function RevenueTax() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between py-3">
      <RevenueCard
        title="Total Revenue"
        value="$120,000"
        Icon={UsersRound}
        bgColor="bg-[#E5E4FF]"
        iconColor="fill-[#3D42DF] text-[#E5E4FF]"
      />
      
      <RevenueCard
        title="Texable Transactions"
        value="$24,500"
        Icon={Box}
        bgColor="bg-[#FCF3D6]"
        iconColor="fill-[#FEC53D] text-[#FCF3D6]"
      />
      
      <RevenueCard
        title="Tax Collected"
        value="$15,200"
        Icon={ChartSpline}
        bgColor="bg-[#D9F7E8]"
        iconColor="text-[#4AD991]"
      />
    </div>
  );
}