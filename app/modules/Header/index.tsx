import React from 'react'
import Logo from '../../components/Logo/Logo'
import Nav from '@/app/components/Nav/Nav'
import Button from '@/app/components/Button/Button'

const Header = () => {
    return (
        <div className='!pt-[55px]'>
            <div className={`containers flex justify-between items-center gap-2`}>
                <Logo />
                <Nav />
                <Button text={'Связаться с нами'} />
            </div>
        </div>
    )
}

export default Header