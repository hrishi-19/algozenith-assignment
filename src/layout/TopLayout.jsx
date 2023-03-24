import React from 'react'
import ActionButtonWrapper from '../components/ActionButtonWrapper';
import OptionButtonWrapper from '../components/OptionButtonWrapper';
import TopText from '../components/TopText'
import TopImage from '../components/TopImage';

const TopLayout = () => {
  return (
    <div className='toplayout w-full h-auto flex items-center justify-evenly px-4 py-6'>
      <div className='sm:flex-row flex-col flex  items-center justify-center w-full'>
        <div className='section-1 basis-3/5 h-full flex flex-col sm:px-24 px-6 sm:pt-0 pt-6'>
          <TopText />
          <div className="button-sec w-full flex sm:flex-col flex-col-reverse items-center">
            <ActionButtonWrapper />
            <OptionButtonWrapper />
          </div>
        </div>
        <TopImage />
      </div>
    </div>
  )
}

export default TopLayout