import React from 'react'
import supply1 from '../assets/supply1.png'
import supply2 from '../assets/supply2.png'
import supply3 from '../assets/supply3.png'
import supply4 from '../assets/supply4.png'

const Supply = () => {
  return (
    <section>
        <div className="max-w-container mx-auto">
            <div className='lg:flex lg:justify-between lg:flex-row flex-col flex-wrap'>

            <div className='lg:w-1/3 lg:pt-[78px] lg:pb-[100px] pt-[40px] pb[60px] text-center lg:text-start'>
                <h2 className='lg:text-start font-pops lg:text-[48px] text-[24px] font-bold text-[#000]'>The biggest</h2>
                <h3 className='lg:text-startfont-pops lg:text-[48px] text-[24px] font-bold text-[#000]'>supplier on</h3>
                <h4 className='lg:text-start font-pops lg:text-[48px] text-[24px] font-bold text-[#000]'>the country</h4>
            </div>
            <div className='lg:w-2/3 lg:pt-[161px] lg:pb-[161px] pt-[40px] pb[60px] text-center lg:text-start font-pops font-semibold text-[16px] text-#6C6C6C]'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
            </div>

        </div>
        <div className='flex lg:flex-row flex-col  pt-[100px]'>
            <img className='lg:pe-[10px] pb-[10px] '  src={supply2} alt="" />
            <img className='lg:pe-[10px] pb-[10px] '  src={supply3} alt="" />
            <img className='lg:pe-[10px] pb-[10px] '  src={supply1} alt="" />
            <img className='lg:pe-[10px] pb-[10px] '  src={supply4} alt="" />
        </div>
    </section>
  )
}

export default Supply