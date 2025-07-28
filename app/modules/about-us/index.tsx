import Marquee from '@/app/components/Marque/Marque';
import React from 'react'
import UnicalDesign from './UnicalDesign';
import ProDesign from './ProDesign';
import AdaptivTecnologies from './AdaptivTecnologies';
import Effective from './Effective';
import Sovershertvo from './Sovershertvo';
import Heading from '@/app/components/Heading/Heading';

const TecnologiesModule = () => {

  return (
    <div>
      <div>
        <div className="relative z-[20]">
          <div className="absolute bottom-full left-0 w-full h-[80px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
          <h2 className="font-medium text-[#747474] text-xl m-auto text-center py-4 relative z-[20] bg-black">Топ кампании которые доверились нам</h2>
        </div>
        <Marquee />
      </div>

      <Heading title={<>Технологии с <br /> человеческим подходом</>} text='О нас' paragraph='Мы — молодая команда, которая живёт на стыке технологий и эстетики. Мы не просто следим за новейшими трендами — мы их создаём. Наши решения объединяют высокие технологии, безупречный стиль дизайна и взгляд, устремлённый далеко в будущее.'/>

      <div className="containers h-screen">
        <div className='flex justify-between items-center gap-[15px] !mt-[85px]'>
        <ProDesign />
        <AdaptivTecnologies />
        <Effective />
      </div >
      <div className='flex justify-between items-center gap-[15px] !mt-[15px]'>

        <Sovershertvo />
        <UnicalDesign />
      </div>
      </div>
    </div>
  )
}

export default TecnologiesModule


