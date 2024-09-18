import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const Blog = () => {
  return (
    <section className='bg-[#F0F0F0]'>

    <div className='max-w-container mx-auto'>
        <div className='lg:flex flex-wrap justify-center lg:justify-start lg:flex-row flex-col items-center'>
            <img className='lg:ps-[32px] lg:pt-[110px] pt-[110px] lg:pb-[162px]' src={blog1} alt="" />
            <img className='lg:ps-[32px] lg:pt-[110px] pt-[20px]  lg:pb-[162px]' src={blog2} alt="" />
            <img className='lg:ps-[32px] lg:pt-[110px] pt-[20px]  lg:pb-[162px] pb:[162px]' src={blog3} alt="" />
        </div>
    </div> 
    </section>
  )
}

export default Blog