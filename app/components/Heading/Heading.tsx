import React, { ReactNode } from 'react'

const Heading = ({ title, text, paragraph}: { title: ReactNode, text: string, paragraph: string }) => {
    return (
        <div className='!mt-[200px] !mb-[85px]'>
            <div className='flex justify-center'>
                <div className={`h-[45px] !px-[22px] border border-[#707070] rounded-[50px] font-semibold text-[16px] flex justify-center gap-2 items-center`}>
                    <span className='w-[12px] h-[12px] rounded-[50%] bg-[#6BB0FF] border-[2px] border-[#484848]'></span>
                    <span>{text}</span>
                </div>
            </div>
            <h2 className={`text-[64px] font-semibold bg-gradient-to-b leading-[85%] from-neutral-400 text-center !my-[40px] !m-auto via-neutral-500 to-blue-400 bg-clip-text text-transparent`}>
                {title}
            </h2>
            <p className='max-w-[900px] text-[#CEC9C9] font-medium text-[16px] !m-auto text-center'>
                {paragraph}
            </p>
        </div>
    )
}

export default Heading