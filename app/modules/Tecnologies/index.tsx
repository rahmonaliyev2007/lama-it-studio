
import Marquee from '@/app/components/Marque/Marque';
import React from 'react'
import UnicalDesign from './UnicalDesign';
import ProDesign from './ProDesign';
import AdaptivTecnologies from './AdaptivTecnologies';
import Effective from './Effective';
import Sovershertvo from './Sovershertvo';

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
      <div className="containers h-screen">
        <div className='flex justify-between items-center gap-[15px] !mt-[200px]'>
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


