import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/images/lama.svg'
const Logo = () => {
    return (
        <div className={`text-[24px] text-white font-bold flex items-end gap-1 cursor-pointer group leading-[100%]`}> <Image src={logo} width={30} height={30} alt='lama logo' />
            <div className='!h-[25px] overflow-hidden'>
                <div className='group-hover:translate-y-[-100%] duration-500'>Lama</div>
                <div  className='group-hover:translate-y-[-100%] translate-y-[50%] duration-500'>Lama</div>
            </div>
        </div>
    )
}

export default Logo