import React from 'react'
import ActionButton from './ActionButton';
const ActionButtonWrapper = () => {
  return (
    <div className="button-top w-full py-3 sm:flex-row  flex-col flex">
    <ActionButton Class={"px-10 py-3 bg-slate-100 color font-bold rounded-md"} text={"Join Now"} />
    <ActionButton Class={"px-8 py-3 gradient sm:ml-6  ml-0 sm:mt-0 mt-3 rounded-md text-slate-100 font-bold"} text={"View Curriculum"} />
</div>
  )
}

export default ActionButtonWrapper