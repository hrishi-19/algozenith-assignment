import React from 'react'
import ButtonOption from './ButtonOption';
const OptionButtonWrapper = () => {
    const OptionButons = [0, 1, 2, 3]
  return (
    <div className="option-section flex flex-wrap  items-center w-full">
    {OptionButons.map(item => <ButtonOption key={item}resp={"option-box flex  items-center mt-5 sm:w-auto w-1/2 "} text={"Lorem ipsum dolor sit amet."} />)}

</div>
  )
}

export default OptionButtonWrapper