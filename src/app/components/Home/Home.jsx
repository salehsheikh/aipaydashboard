import React from 'react'
import HeroSection from './HeroSection'
import TransactionChart from './TransactionChart';
import Calendar from './Calendar'
import{ WorldMap} from './WorldMap';
import DonutChart  from './DonutChart';
const Home = () => {
  return (
    <div className='mx-2 mt-13 mb-4 '>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2  '>
      <HeroSection/>
      <TransactionChart/>
    </div>
    <div className='grid grid-cols-2 xl:grid-cols-3 gap-1 mt-8 '>
    <Calendar/>
    <WorldMap/>
    <DonutChart/>
    </div>
   
    </div>
  )
}

export default Home
