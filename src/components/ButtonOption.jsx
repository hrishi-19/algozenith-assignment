import React from 'react'

const ButtonOption = ({resp,text}) => {
    return (
        <div className={resp}>
            <span className='sm:h-10 h-6 sm:w-10 w-6 shadow-sm shadow-slate-400 rounded-md'></span>
            <p className='px-3 text-slate-200 sm:text-md text-sm sm:tracking-wider tracking-tight'>{text}</p>
        </div>
    )
}

export default ButtonOption