import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa6";
import { RxCross1, RxSpaceBetweenHorizontally } from "react-icons/rx";


const Navbar = () => {
    let [show,setShow] = useState(false);
    let handleBars = ()=> {
        setShow(!show)
    }
  return (
    <nav className='bg-[red] '>
        <div className='max-w-container mx-auto'>
            <div className='flex items-center flex-wrap  lg:flex-nowrap'>
                <div className='w-full lg:w1/4   '>
                <div className='pl-0'>

                    <img src={Logo} alt="" className='' />
                </div>
                </div>
                <div id='drowdown' className='w-3/4 py-4'>
                   <ul className=' invisible lg:visible flex  lg:justify-end lg:gap-x-4 gap-x-2 pl-4 hover:text[#282828] cursor-pointer duration-300 ease-in-out'>
                    <li className='text-white text-[8px] lg:text-[16px]  font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Home</li>
                    <li className='text-white lg:text-[16px] text-[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>About</li>
                    <li className='text-white lg:text-[16px] text-[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Service</li>
                    <li className='text-white lg:text-[16px] text-[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Gallery</li>
                    <li className='text-white lg:text-[16px] text-[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Blog</li>
                    <li className='text-white lg:text-[16px] text-[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer border-2 border-white py-3 px-5 hover:border-[#282828]'>Contact</li>
                   </ul>
                </div>
                <div  onClick={()=>setShow(!show)} className='lg:hidden'>
                    {show == true?<RxCross1/>  :<FaBars/>}
                   {show && (
                    <div>
                        <ul className=''>
                        <li className='text-white text:[6px] lg:text[16px]  font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Home</li>
                    <li className='text-white lg:text[16px] text:[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>About</li>
                    <li className='text-white lg:text[16px] text:[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Service</li>
                    <li className='text-white lg:text[16px] text:[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Gallery</li>
                    <li className='text-white lg:text[16px] text:[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer duration-300 ease-in-out py-3'>Blog</li>
                    <li className='text-white lg:text[16px] text:[8px] font-pops font-semibold hover:text-[#282828] cursor-pointer border-2 border-white py-3 px-5 hover:border-[#282828]'>Contact</li>
                        </ul>
                        
                    </div>
                   )
                    
                   }
                   
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar