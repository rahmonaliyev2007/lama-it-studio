'use client'

import GradientText from '@/app/components/GradientText/GradientText'
import Heading from '@/app/components/Heading/Heading'
import { sendMessageToBot } from '@/app/services/sendMessageToBot'
import { InstagramIcon, TelegramIcon, FaceBookIcon, LinkedInIcon } from '@/public/assets/icons/SocialLinks'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useState } from 'react'


const socialLinks = [
  { icon: <TelegramIcon />, url: 'https://t.me/lamaitofficial' },
  { icon: <InstagramIcon />, url: 'https://www.instagram.com/lamastudio.uz?igsh=bDJ1enFmYTJia3pk' },
  { icon: <FaceBookIcon />, url: '' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/%D0%B0%D0%BC%D0%B8%D1%80%D1%85%D0%B0%D0%BD-%D0%B0%D0%BB%D0%B8%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-a52237378/' },
]



const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const t = useTranslations();

  const formFields = [
    { name: 'name', label: t('input_info_name_1'), type: 'text', placeholder: t('input_info_name_2') },
    { name: 'phone', label: t('input_info_contact'), type: 'tel', placeholder: '+998 xx xxx xx xx' },
    { name: 'message', label: t('input_info_title_1'), type: 'textarea', placeholder: t('input_info_title_2') },
  ]

  const contactInfo = [
    { label: t('info_31'), content: t('info_27'), type: 'text' },
    { label: t('info_28'), content: 'info@lama.ru', type: 'email' },
    { label: t('info_29'), content: '+998933851755', type: 'phone' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessageToBot(form)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <footer className='containers' id='contact'>

      <div className='!mt-[200px] containers !mb-[85px] max-[900px]:!mt-[160px] max-[900px]:!mb-[60px] max-[768px]:!mt-[130px] max-[768px]:!mb-[40px] max-[580px]:!mt-[100px] max-[580px]:!mb-[32px]'>
        <div className='flex justify-center'>
          <div className={`h-[45px] max-[768px]:h-[40px] max-[600px]:h-[36px] max-[768px]:!px-[14px] max-[600px]:!px-[11px]  max-[768px]:text-[13px] !px-[22px] border border-[#707070] rounded-[50px] font-semibold text-[16px] flex justify-center gap-2 items-center`}>
            <span className='w-[12px] h-[12px] rounded-[50%] bg-[#6BB0FF] border-[2px] border-[#484848]'></span>
            <span>{t('menu_5')}</span>
          </div>
        </div>
        <h2
          className={`
    text-[64px] max-[1100px]:text-[50px] max-[768px]:!my-[25px] 
    max-[768px]:text-[40px] max-[600px]:text-[32px] 
    font-semibold leading-[85%] max-[768px]:leading-[85%] 
    duration-1000 text-center !my-[40px] !m-auto
    bg-[linear-gradient(-182deg,_white,_#737373,_#60a5fa)]
    bg-clip-text text-transparent
  `}
        >
          {t('header_7')}
        </h2>
        <p className='max-w-[900px] leading-[110%] max-[768px]:text-[14px] max-[768px]:leading-[110%] text-[#CEC9C9] font-medium text-[16px] !m-auto text-center'>
          {t('info_26')}
        </p>
      </div>

      <div className='flex justify-between gap-4 items-start max-md:flex-col-reverse max-md:gap-[100px]'>

        {/* ==== CONTACT INFO ==== */}
        <div className='w-full flex flex-col gap-[44px] max-[768px]:text-center'>
          {contactInfo.map(({ label, content, type }, i) => (
            <div key={i}>
              <h4 className='text-2xl'><GradientText text={label} /></h4>
              <div className='mt-[18px] text-xl font-medium'>
                {type === 'text' && <p className='max-w-[284px] max-[768px]:!m-auto'>{content}</p>}
                {type === 'email' && <Link className='text-[36px]' href={`mailto:${content}`}>{content}</Link>}
                {type === 'phone' && <Link className='text-[36px] font-semibold' href={`tel:${content}`}>{content}</Link>}
              </div>
            </div>
          ))}

          <div>
            <h4 className='text-2xl'><GradientText text={t('info_30')} /></h4>
            <div className='flex items-center gap-3 !mt-[18px] max-[768px]:justify-center'>
              {socialLinks.map((item, i) => (
                <Link key={i} href={item.url} target='_blank' className='w-[49px] h-[49px] rounded-[15px] bg-[#6BB0FF1A] flex justify-center items-center duration-300 hover:shadow-[inset_0_0_7.1px_#FFFFFF40,inset_0_0_24.9px_#6BB0FF]'>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ==== FORM ==== */}
        <div className='w-full'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6 max-md:gap-3'>
            {formFields.map(({ name, label, type, placeholder }) => (
              <label key={name} className='flex flex-col gap-2'>
                <span className='text-xl font-medium hidden md:block'>{label}</span>
                {type === 'textarea' ? (
                  <textarea name={name} value={form[name as keyof typeof form]} onChange={handleChange} rows={5} placeholder={placeholder} required className='rounded-[15px] border border-[#4E4C4C] !p-3 outline-none resize-none max-md:text-sm' />
                ) : (
                  <input type={type} name={name} value={form[name as keyof typeof form]} onChange={handleChange} placeholder={placeholder} required className='!p-3 rounded-[15px] border border-[#4E4C4C] outline-none max-md:text-sm' />
                )}
              </label>
            ))}
            <div className='flex max-md:justify-end'>
              <button type="submit" className='gradient-button  self-start max-md:text-sm max-md:'>
                <GradientText text={t('button_3')} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Contact