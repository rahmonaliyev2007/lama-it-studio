"use client"
import React from 'react'
import Payment from './payment'
import Heading from '@/app/components/Heading/Heading'
import { useTranslations } from 'next-intl'
import Slider from './paymentSlider'

const PaymentModule = () => {
  const t = useTranslations();
  return (
    <>
    <div className='containers'>
      <Heading text={t('menu_2')} title={<>{t('header_4').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}</>} paragraph={t('info_12')} />
    </div>
     <Payment/>
     <Slider/>
    </>
  )
}

export default PaymentModule