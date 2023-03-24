import React from 'react'
import { priceData } from '../data/data'
import ActionButton from './ActionButton'
import ButtonOption from './ButtonOption'

const PriceCard = () => {
    return (
        <div className='card  basis-1/2 h-auto w-4/5 flex items-center justify-center py-6'>
            <div className='sm:w-1/2 w-full flex flex-col rounded-md shadow-sm shadow-black/25 h-full'>
                <div className='basis-1/4 bg-white p-6    '>
                    <p className='text-black/90 font-bold text-sm'>Premium Victory Batch</p>
                    <span className='text-3xl font-extrabold text-black/50 line-through'>&#8377; 19,999</span>
                    <br />
                    <span className='text-4xl font-extrabold text-sky-800'>&#8377; 13,999</span>
                </div>
                <div className='basis-3/4 toplayout px-3 pt-3 p-6 rounded-b-md'>
                {priceData.map(item=><ButtonOption key={item} resp={"option-box flex  items-center mt-5 w-full "} text={item}/>)}
                <ActionButton Class={"px-10 py-1 bg-slate-100 color font-bold rounded-md mt-3 w-full "} text={"Join Now"} />
                </div>
            </div>

        </div>
    )
}

export default PriceCard
