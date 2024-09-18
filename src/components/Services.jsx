import React from 'react'
import service1 from '../assets/Services1.png'
import service2 from '../assets/Services3.png'
import service3 from '../assets/Services2.png'
import servicesBorttom from '../assets/servicesBorttom.png'


const Services = () => {
  return (
    <section>
        <div className='max-w-container mx-auto  '>
            <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center'>
            <div className='w-1/2 flex lg:flex-row flex-col flex-wrap '>
                <h2 className='pt-[134px] pb-[10px] font-pops font-bold lg:text-[64px] text-[24px] '>Our Services</h2>
                <p className='lg:pb-[142px] pb-[20px] font-pops font-semibold lg:text-[16px] text-[16px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            
            <div className='w-1/2 lg:pe-[10px] lg:pt-[127px] pt-[10px]'>
                <img src={service1} alt="" />
            </div>
            <div className='w-1/2 lg:pe-[10px] pt-[10px]'>
            <img src={service2} alt="" />
            </div>
            <div className='w-1/2 lg:pe-[10px] pt-[10px]'>
            <img src={service3} alt="" />
            </div>
            </div>
            

            <div className='flex flex-wrap lg:flex-nowrap'>
             <div className=' w-full lg:w-2/5 mt-[135px] text-center'>
                    <h2 className=' pt-[120px] pb-[120px] ps-[40px] pe-[40px]  bg-[#F40404] font-pops font-bold text-[36px] text-white'>Learn more about our company</h2>
             </div>
             <div className='2/5 mt-[135px]'>
                    <img src={servicesBorttom} alt="" />
             </div>
            </div>

        </div>
    </section>
  )
}

export default Services