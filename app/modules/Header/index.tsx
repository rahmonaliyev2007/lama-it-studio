'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '@/app/components/Nav/Nav';
import Button from '@/app/components/Button/Button';
import Cursor from '../Cursor';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { getCookie } from 'cookies-next';
import MobileNav from '@/app/components/Nav/mobileNav';

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [lang, setLang] = useState<'uz' | 'ru' | ''>('');

  useEffect(() => {
    const cookieLang = getCookie('NEXT_LOCALE');
    if (cookieLang === 'uz' || cookieLang === 'ru') {
      setLang(cookieLang);
    } else {
      setLang('ru'); // fallback
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as 'uz' | 'ru';
    setLang(newLang);
    router.push(pathname, { locale: newLang });
  };

  return (
    <div className='!pt-[55px]'>
      <div className='containers flex justify-between items-center gap-4'>
        <Logo />
        <Nav />
        <div className='flex items-center gap-2'>

          <select value={lang} onChange={handleChange} className=" rounded-[10px] border-[#2B2B2B] border text-sm h-[45px] max-[1050px]:h-[35px] text-white w-[50px] bg-[rgb(14,14,14)] !px-1  shadow-sm focus:outline-none transition">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
          </select>
          <div className='flex items-center gap-2'>
            <MobileNav />

            <div className='max-[1050px]:hidden backdrop-blur-2xl bg-transparent '>
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