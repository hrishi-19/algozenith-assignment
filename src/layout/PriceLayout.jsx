import React from 'react'
import PriceCard from '../components/PriceCard'
import PriceText from '../components/PriceText'

const PriceLayout = () => {
  return (
    <div className=' pricelayout w-full h-auto flex sm:flex-row flex-col items-center justify-evenly py-6 '>
      <PriceText />
      <PriceCard />
    </div>
  )
}

export default PriceLayout