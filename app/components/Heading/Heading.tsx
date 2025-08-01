import React, { ReactNode } from 'react'

const Heading = ({ title, text, paragraph}: { title: ReactNode, text: string, paragraph: string }) => {
    return (
        <div className='!mt-[200px] containers !mb-[85px] max-[900px]:!mt-[160px] max-[900px]:!mb-[60px] max-[768px]:!mt-[130px] max-[768px]:!mb-[40px] max-[580px]:!mt-[100px] max-[580px]:!mb-[32px]'>
            <div className='flex justify-center max-[768px]:justify-start'>
                <div className={`h-[45px] max-[768px]:h-[40px] max-[600px]:h-[36px] max-[768px]:!px-[14px] max-[600px]:!px-[11px]  max-[768px]:text-[13px] !px-[22px] border border-[#707070] rounded-[50px] font-semibold text-[16px] flex justify-center gap-2 items-center`}>
                    <span className='w-[12px] h-[12px] rounded-[50%] bg-[#6BB0FF] border-[2px] border-[#484848]'></span>
                    <span>{text}</span>
                </div>
            </div>
            <h2
  className={`
    text-[64px] max-[1100px]:text-[50px] max-[768px]:!my-[25px] 
    max-[768px]:text-[40px] max-[768px]:text-start max-[600px]:text-[32px] 
    font-semibold leading-[85%] max-[768px]:leading-[85%] 
    duration-1000 text-center !my-[40px] !m-auto
    bg-[linear-gradient(-182deg,_white,_#737373,_#60a5fa)]
    bg-clip-text text-transparent
  `}
>
  {title}
</h2>
            <p className='max-w-[900px] max-[768px]:text-start leading-[110%] max-[768px]:text-[14px] max-[768px]:leading-[110%] text-[#CEC9C9] font-medium text-[16px] !m-auto text-center'>
                {paragraph}
            </p>
        </div>
    )
}

export default Heading