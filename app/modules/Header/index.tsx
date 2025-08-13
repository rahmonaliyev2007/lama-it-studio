'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '@/app/components/Nav/Nav';
import Button from '@/app/components/Button/Button';
import Cursor from '../Cursor';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { getCookie, setCookie } from 'cookies-next';
import MobileNav from '@/app/components/Nav/mobileNav';

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [lang, setLang] = useState<'uz' | 'ru'>('ru');

  useEffect(() => {
    const cookieLang = getCookie('NEXT_LOCALE');
    if (cookieLang === 'uz' || cookieLang === 'ru') {
      setLang(cookieLang);
    }
  }, []);

  const handleChange = () => {
    const newLang = lang === 'uz' ? 'ru' : 'uz';
    setLang(newLang);
    setCookie('NEXT_LOCALE', newLang);
    router.push(pathname, { locale: newLang });
  };

  return (
    <div className='!pt-[55px]'>
      <div className='containers flex justify-between items-center gap-4'>
        <Logo />
        <Nav />
        <div className='flex items-center gap-2'>
          <button onClick={handleChange} className='rounded-[10px] gradient-butto border-[#2B2B2B] hover:border-[#6BB0FF]/70 duration-300 border h-[45px] max-[1050px]:h-[35px] max-[1050px]:w-[40px] text-white w-[50px] bg-[rgb(14,14,14)] !px-1 max-[1050px]:!px-0 shadow-sm focus:outline-none transition z-[70] cursor-pointer' >
            {lang}
          </button>

          <div className='flex items-center gap-2'>
            <MobileNav />
            <div className='max-[1050px]:hidden z-[70]'>
              <Button text={t('menu_6')} />
            </div>
          </div>
        </div>
      </div>
      <Cursor />
    </div>
  );
};

export default Header;