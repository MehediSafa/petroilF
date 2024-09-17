import React from 'react'
import bannerImg from '../assets/bannerimg.png'

const Banner = () => {
  return (
    <section className='bg-cover bg-center min-h-full py-[257px]' 
    style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='max-w-container mx-auto'>
        <div>
         <h2 className=' pb-6 font-pops text-[64px] font-bold text-white w-[842px] h-[186px]'>We exist since 1975 on the oil and gas industry.</h2>
         <div className='pt-[31px] lg:text-start text-center'>

         <span className=' py-2 px-4  bg-[#F40404]'>Learn More</span>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Banner