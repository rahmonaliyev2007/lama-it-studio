import React from 'react'
import Payment from './payment'
import Heading from '@/app/components/Heading/Heading'

const PaymentModule = () => {
  return (
    <>
    <div className='containers'>
      <Heading text="Услуги" title={<>Что мы умеем — <br /> технологично, точно, красиво</>} paragraph="От сайта до сложной цифровой экосистемы — мы разрабатываем продукты, которые решают реальные задачи. В каждом проекте — баланс технологий, дизайна и здравого смысла. Мы не просто делаем «как надо», мы делаем как лучше." />
    </div>
     <Payment/>
    </>
  )
}

export default PaymentModule