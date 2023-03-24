import React from 'react'
import Logo from "../assets/logo.png";

const TopImage = () => {
    return (
        <div className='img-section basis-2/5 h-full flex items-center justify-start'>
            <img src={Logo} className="img-responsive" alt='' />
        </div>
    )
}

export default TopImage