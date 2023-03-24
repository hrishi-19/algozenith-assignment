import React from 'react'

const GrayBox = ({mainText,subText}) => {
    return (
      <div className="flex justify-around  items-center mt-5" >
            <span className='sm:h-10 h-6 sm:w-10 w-6 bg-slate-200 rounded-md'></span>
            <div className='sm:px-2 px-1'>
                <p className='text-black/80 font-bold sm:text-lg text-sm'>{mainText}</p>
                <p className='text-black/80 text-sm'>{subText}</p>
            </div>
        </div>
    )
}

export default GrayBox