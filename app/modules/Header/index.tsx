'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '@/app/components/Nav/Nav';
import Button from '@/app/components/Button/Button';
import Cursor from '../Cursor';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { getCookie } from 'cookies-next';

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [lang, setLang] = useState<'uz' | 'ru' | ''>(''); // Boshlanishida bo‘sh

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

        {/* Language Select */}
        <select
          value={lang}
          onChange={handleChange}
          className=" rounded-lg border border-gray-300 text-sm bg-white text-black focus:outline-none shadow-sm hover:border-black transition"
        >
          <option value="uz">uz</option>
          <option value="ru">ru</option>
        </select>

        {/* Button */}
        <div className='max-[900px]:hidden'>
          <Button text={t('menu_6')} />
        </div>
      </div>
      <Cursor />
    </div>
  );
};

export default Header;