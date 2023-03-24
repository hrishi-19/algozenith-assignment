import React from 'react'


const ActionButton = ({Class,text}) => {
    
  return (
    <button className={Class}>{text}</button>
  )
}

export default ActionButton