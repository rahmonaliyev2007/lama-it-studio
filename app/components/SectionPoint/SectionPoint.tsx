import React from 'react'

const SectionPoint = ({text}:{text:string}) => {

  return (
    <div className={`py-[13px] px-[22px] border border-[#707070] rounded-[15px] block`}>
        <span className=''></span>
        <span>{text}</span>
    </div>
  )
}

export default SectionPoint