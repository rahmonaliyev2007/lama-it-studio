import React from 'react'
import Logo from '../../components/Logo/Logo'
import Nav from '@/app/components/Nav/Nav'
import Button from '@/app/components/Button/Button'
import Cursor from '../Cursor'

const Header = () => {
    return (
        <div className='!pt-[55px]'>
            <div className={`containers flex justify-between items-center gap-2`}>
                <Logo />
                <Nav />
                <div className='max-[900px]:hidden'><Button text={'Связаться с нами'} /></div>
            </div>
            <Cursor/>
        </div>
    )
}

export default Header