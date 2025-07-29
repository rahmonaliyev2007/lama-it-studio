'use client'

import GradientText from '@/app/components/GradientText/GradientText'
import Heading from '@/app/components/Heading/Heading'
import { sendMessageToBot } from '@/app/services/sendMessageToBot'
import { InstagramIcon, TelegramIcon, FaceBookIcon, LinkedInIcon } from '@/public/assets/icons/SocialLinks'
import Link from 'next/link'
import React, { useState } from 'react'

const contactInfo = [
  { label: 'Офис:', content: 'ул. Афросиаб, 12, Мирзо-Улугбекский район, г. Ташкент, Узбекистан', type: 'text' },
  { label: 'Эмейл:', content: 'info@lama.ru', type: 'email' },
  { label: 'Номер телефона:', content: '+998933851755', type: 'phone' },
]

const socialLinks = [
  { icon: <TelegramIcon />, url: '' },
  { icon: <InstagramIcon />, url: '' },
  { icon: <FaceBookIcon />, url: '' },
  { icon: <LinkedInIcon />, url: '' },
]

const formFields = [
  { name: 'name', label: 'Имя', type: 'text', placeholder: 'Введите имя' },
  { name: 'phone', label: 'Контакт', type: 'tel', placeholder: '+998 xx xxx xx xx' },
  { name: 'message', label: 'Сообщение', type: 'textarea', placeholder: 'Введите сообщение' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

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
      <Heading text='Контакты' title={<>Свяжитесь с нами</>} paragraph='Есть вопросы или нужна помощь? Наша команда здесь, чтобы помочь. Свяжитесь с нами для демонстраций, поддержки или любых вопросов, которые у вас могут возникнуть.' />

      <div className='flex justify-between gap-4 items-start max-md:flex-col-reverse'>

        {/* ==== CONTACT INFO ==== */}
        <div className='w-full flex flex-col gap-[44px]'>
          {contactInfo.map(({ label, content, type }, i) => (
            <div key={i}>
              <h4 className='text-2xl'><GradientText text={label} /></h4>
              <div className='mt-[18px] text-xl font-medium'>
                {type === 'text' && <p className='max-w-[284px]'>{content}</p>}
                {type === 'email' && <Link className='text-[36px]' href={`mailto:${content}`}>{content}</Link>}
                {type === 'phone' && <Link className='text-[36px] font-semibold' href={`tel:${content}`}>{content}</Link>}
              </div>
            </div>
          ))}

          <div>
            <h4 className='text-2xl'><GradientText text='Соцсети:' /></h4>
            <div className='flex items-center gap-3 !mt-[18px]'>
              {socialLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className='w-[49px] h-[49px] rounded-[15px] bg-[#6BB0FF1A] flex justify-center items-center duration-300 hover:shadow-[inset_0_0_7.1px_#FFFFFF40,inset_0_0_24.9px_#6BB0FF]'
                >
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
                  <input type={type} name={name} value={form[name as keyof typeof form]} onChange={handleChange} placeholder={placeholder} required className='!p-3 rounded-[15px] border border-[#4E4C4C] outline-none max-md:text-sm'/>
                )}
              </label>
            ))}
            <div className='flex max-md:justify-end'>
              <button type="submit" className='gradient-button  self-start max-md:text-sm max-md:'>
              <GradientText text='Отправить' />
            </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Contact