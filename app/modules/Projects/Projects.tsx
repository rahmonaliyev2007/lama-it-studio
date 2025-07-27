import Heading from '@/app/components/Heading/Heading'
import React from 'react'

const Projects = () => {
  return (
    <div className='containers'>
      <Heading text='Проекты' title={<>Реализованные решения, <br /> подтверждённые практикой.</>} paragraph='В этом разделе представлены реальные кейсы и проекты, которые мы успешно реализовали для клиентов из разных сфер. Каждый из них — результат глубокого анализа, индивидуального подхода и технологической экспертизы. Мы гордимся тем, что наши цифровые продукты помогают бизнесам расти, упрощать процессы и двигаться вперёд.' />
      <div className='flex justify-between items-center gap-[33px]'>
        <div className='w-[50%] bg-gray-400 flex justify-center items-center !px-[65px] !pt-[60px] !pb-[30px]'>
       
      </div>
      <div className='w-[50%] bg-gray-400 flex justify-center items-center !px-[65px] !pt-[60px] !pb-[30px]'>
        
      </div>
      </div>
    </div>
  )
}

export default Projects