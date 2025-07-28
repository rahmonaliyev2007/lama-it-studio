'use client'

import GradientText from '@/app/components/GradientText/GradientText'
import Heading from '@/app/components/Heading/Heading'
import { InstagramIcon, TelegramIcon, FaceBookIcon, LinkedInIcon } from '@/public/assets/icons/SocialLinks'
import Link from 'next/link'
import React, { useState } from 'react'

const contactInfo = [{ label: 'Офис:', content: 'ул. Афросиаб, 12, Мирзо-Улугбекский район, г. Ташкент, Узбекистан', type: 'text', }, { label: 'Эмейл:', content: 'info@lama.ru', type: 'email', }, { label: 'Номер телефона:', content: '+998933851755', type: 'phone', },]
const socialLinks = [{ icon: <TelegramIcon />, url: '' }, { icon: <InstagramIcon />, url: '' }, { icon: <FaceBookIcon />, url: '' }, { icon: <LinkedInIcon />, url: '' },]
const formFields = [{ name: 'name', label: 'Имя', type: 'text' }, { name: 'email', label: 'Эмейл', type: 'email' }, { name: 'message', label: 'Сообщение', type: 'textarea' },]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Имя: ${form.name}\nЭмейл: ${form.email}\nСообщение: ${form.message}`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <footer className='containers'>
      <Heading text='Контакты' title={<>Свяжитесь с нами</>} paragraph='Есть вопросы или нужна помощь? Наша команда здесь, чтобы помочь. Свяжитесь с нами для демонстраций, поддержки или любых вопросов, которые у вас могут возникнуть.' />

      <div className='flex justify-between gap-4 items-start'>
        <div className='w-full flex flex-col gap-[44px]'>
          {contactInfo.map(({ label, content, type }, i) => (
            <div key={i}>
              <h4 className='text-2xl'><GradientText text={label} /></h4>
              <div className='!mt-[18px] text-xl font-medium'>
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
                <Link key={i} href={item.url} className='w-[49px] h-[49px] rounded-[15px] bg-[#6BB0FF1A] flex justify-center items-center duration-300 hover:shadow-[inset_0_0_7.1px_#FFFFFF40,inset_0_0_24.9px_#6BB0FF]' >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
            {formFields.map(({ name, label, type }) => (
              <label key={name} className='flex flex-col gap-2'>
                <span className='text-xl !mb-[6px] font-medium'>{label}</span>
                {type === 'textarea' ? (
                  <textarea name={name} value={form[name as keyof typeof form]} onChange={handleChange} rows={5} required className='rounded-[15px] border border-[#4E4C4C] !p-3 outline-none resize-none' />) : (
                  <input type={type} name={name} value={form[name as keyof typeof form]} onChange={handleChange} required className='!p-3 rounded-[15px] border border-[#4E4C4C] outline-none' />
                )}
              </label>
            ))}
            <button className='gradient-button max-w-[180px]' > <GradientText text='Отправить' /></button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Contact