import React from 'react'
import { grayBox } from '../data/data'
import GrayBox from './GrayBox'

const PriceText = () => {
    return (
        <div className=' basis-1/2 flex flex-col  items-center'>
            <div className='flex flex-col items-center '>
                <p className='text-4xl leading-10  sm:text-justify text-center font-extrabold w-3/4'>Invest in skills,<br /><span className='text-blue-700/90'>earn 10X</span> of what you paid.</p>
                <p className='text-md w-3/4 mt-5 text-black/70 font-bold sm:text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident quam consectetur veniam delectus aliquid ex amet ipsam perferendis repellat!</p>
            </div>
            <div className='sm:w-3/4 w-full  flex flex-wrap  px-2 justify-between sm:items-center items-start py-12'>
                {
                    grayBox.map((item, index) => <GrayBox key={index} mainText={item.maintext} subText={item.subText} />)
                }
            </div>
        </div>
    )
}

export default PriceText