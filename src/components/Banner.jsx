import React from 'react'
import bannerImg from '../assets/bannerimg.png'

const Banner = () => {
  return (
    <section className='bg-cover bg-center min-h-full py-[257px]' 
    style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='max-w-container mx-auto'>
        <div>
         <h2 className=' pb-6 font-pops lg:text-[64px] text-[24px] font-bold text-white lg:w-[842px] lg:h-[186px] text-center lg:text-start'>We exist since 1975 on the oil and gas industry.</h2>
         <div className='pt-[31px] lg:text-start text-center'>

         <span className=' py-2 px-4  bg-[#F40404]'>Learn More</span>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Banner