"use client"; 

import { useRouter } from "next/navigation"; 
import { UsersRound, Box, ChartSpline, History, TrendingUp } from 'lucide-react';
import HeroCard from './HeroCard';

export default function HeroSection() {
  const router = useRouter();

  const handleCardClick = (title) => {
    if (title === "Active users") {
      router.push("/dashboard/User");
      
    } else if (title === "Total payouts") {
      router.push("/dashboard/User");
    }else if (title==="Fraud Alerts"){
      router.push("/dashboard/FraudAlerts");
    }else if (title==='Total Transactions'){
      router.push("/dashboard/TotalTransaction");
    }
  };

  const cards = [
    {
      title: "Total Transactions",
      value: "$120,000",
      text: "up this month",
      Icon: UsersRound,
      bgColor: "bg-[#E5E4FF]",
      iconColor: "fill-[#3D42DF] text-[#E5E4FF]",
    },
    {
      title: "Total payouts",
      value: "$24,500",
      text: "gradummy text",
      Icon: Box,
      bgColor: "bg-[#FCF3D6]",
      iconColor: "fill-[#FEC53D] text-[#FCF3D6]",
    },
    {
      title: "Fraud Alerts",
      value: "3",
      text: "Suspicious transaction",
      Icon: ChartSpline,
      bgColor: "bg-[#D9F7E8]",
      iconColor: "text-[#4AD991]",
    },
    {
      title: "Active users",
      value: "35,00",
      text: "1.8% up from previous day",
      Icon: History,
      bgColor: "bg-[#FF0000]",
      iconColor: "text-[#FF9066]",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(card.title)}
          className="cursor-pointer"
        >
          <HeroCard
            {...card}
            textIcon={TrendingUp}
            textIconColor="text-green-500"
          />
        </div>
      ))}
    </div>
  );
}
