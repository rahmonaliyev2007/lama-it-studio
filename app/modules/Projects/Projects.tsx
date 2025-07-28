import Heading from '@/app/components/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import aqua from '@/public/assets/images/aqua.png'
import b2b from '@/public/assets/images/b2b.png'
import star from '@/public/assets/images/star.png'
import statone from '@/public/assets/images/statone.png'
import dotsBg from '@/public/assets/images/backgrounds/dots.png'

const projectsData = [
  { image: b2b, alt: 'aqua site lama-it-studio', bg: 'linear-gradient(150deg, #3d3d3d, #6bb0ff58)', title:'B2bshop', link:"", desc:"Компания занимается оптовой торговлей. Мы разработали для неё удобный и адаптивный сайт с каталогом и формой заявки."},
  { image: aqua, alt: 'b2b site lama-it-studio', bg: 'linear-gradient(120deg, #6BB0FF80, #FFFFFF78)', title:'Aqua Evolution', link:"", desc:"Компания занимается продажей оборудования для очистки воды. Мы создали для неё информативный сайт с каталогом, описанием технологий и онлайн-заявкой."},
  { image: star, alt: 'star site lama-it-studio', bg: 'linear-gradient(120deg, black, #153239, #2f1b22, black)', title:'Imart Business', link:"", desc:"Мы разработали CRM-админку для маркетплейса — с управлением товарами, заказами, пользователями и аналитикой в одном удобном интерфейсе."},
  { image: statone, alt: 'statone site lama-it-studio', bg: 'linear-gradient(120deg, #247045, #ceb578)', title:'STAT-URMON', link:"", desc:"ля государственной компании, занимающейся лесным хозяйством, мы разработали удобную админ-панель для управления данными, мониторинга участков и ведения внутренней документации."},
]

const Projects = () => {
  return (
    <main className='containers' id='projects'>
      <Heading text='Проекты' title={<>Реализованные решения, <br /> подтверждённые практикой.</>} paragraph='В этом разделе представлены реальные кейсы и проекты, которые мы успешно реализовали для клиентов из разных сфер. Каждый из них — результат глубокого анализа, индивидуального подхода и технологической экспертизы. Мы гордимся тем, что наши цифровые продукты помогают бизнесам расти, упрощать процессы и двигаться вперёд.'/>

      <div className='flex justify-between items-center gap-[33px] bg'>
        {projectsData.slice(0,2).map(({ image, alt, bg, title, desc}, i) => (
          <div key={i} className="w-[50%] flex relative overflow-hidden justify-center items-center !px-[65px] group !pt-[60px] !pb-[30px] rounded-[30px] border border-[#707070] shadow-[inset_0_0_40px_20px_black] hover:shadow-[inset_0_0_20px_5px_black] duration-1000" style={{ background: bg }}>
            <Image width={570} height={540} alt={alt} src={image} className={`group-hover:scale-[1.1] duration-1000 drop-shadow-[0_0_25px_black] relative z-[2]`}/>
            <div className='absolute bottom-0 group-hover:h-[35%] duration-1000 left-0 h-[50%] w-full rounded-b-[30px] z-[20] bg-gradient-to-b from-transparent via-[#000000b3] to-black'/>
            <div className='absolute bottom-0 left-0 w-full z-[22] !px-[55px] h-[25%]'><div><h2 className='font-semibold text-2xl'>{title}</h2></div><p className='font-medium text-[15px] text-[#969696] leading-[100%] max-w-[490px] !mt-[10px]'>{desc}</p></div>
             <Image src={dotsBg} alt='bacground for projects lama-it-studio' width={500} height={400} className='duration-1000 absolute top-1/2 left-1/2 -translate-1/2 w-[95%] h-[95%] group-hover:w-[110%] group-hover:scale-[1.4] group-hover:opacity-[0.3] blur-[5px] group-hover:blur-[0px]' />
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center gap-[33px] !mt-[33px]'>
        {projectsData.slice(2).map(({ image, alt, bg, title, desc}, i) => (
          <div key={i} className="w-[50%] flex relative overflow-hidden justify-center items-center !px-[65px] group !pt-[60px] !pb-[30px] rounded-[30px] border border-[#707070] shadow-[inset_0_0_40px_20px_black] hover:shadow-[inset_0_0_20px_5px_black] duration-1000" style={{ background: bg }}>
            <Image width={570} height={540} alt={alt} src={image} className={`group-hover:scale-[1.1] duration-1000 drop-shadow-[0_0_25px_black] relative z-[2]`}/>
            <div className='absolute bottom-0 group-hover:h-[35%] duration-1000 left-0 h-[50%] w-full rounded-b-[30px] z-[20] bg-gradient-to-b from-transparent via-[#000000b3] to-black'/>
            <div className='absolute bottom-0 left-0 w-full z-[22] !px-[55px] h-[25%]'><div><h2 className='font-semibold text-2xl'>{title}</h2></div><p className='font-medium text-[15px] text-[#969696] leading-[100%] max-w-[490px] !mt-[10px]'>{desc}</p></div>
             <Image src={dotsBg} alt='bacground for projects lama-it-studio' width={500} height={400} className='duration-1000 absolute top-1/2 left-1/2 -translate-1/2 w-[95%] h-[95%] group-hover:w-[110%] group-hover:scale-[1.4] group-hover:opacity-[0.3] blur-[5px] group-hover:blur-[0px]' />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects