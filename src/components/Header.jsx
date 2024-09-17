import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram    } from "react-icons/fa";

const Header = () => {
  return (
    <header className='py-2 bg-hbg'>
       
        <div className='max-w-container mx-auto'>
            
            <div className='flex items-center flex-wrap lg:flex-nowrap'>
                <div className='w-full lg:w-1/4'>
                    <div className='flex gap-x-2 items-center border-r-2 justify-center lg:justify-start py-2 lg:py-0'>
                        <CiMail className='text-white'/>
                        <p className='text-white font-pops pe-6'>mail@yourcompany.com</p>
                    </div>
                </div>

                <div className='w-full lg:w-/4 '>
                    <div className='flex gap-x-2 items-center lg:ps-10 justify-center lg:justify-start py-2 lg:py-0'>
                        <MdAddCall className='text-white'/>
                        <p className='text-white font-pops'>+896 120 5889 (Toll free)</p>

                    </div>
                </div>

                <div className='w-full lg:w-1/2 '>
                    <div className='flex gap-x-3 justify-center lg:justify-end py-2 lg:py-0'>
                        <FaFacebookF className='text-white'/>
                        <FaTwitter className='text-white'/>
                        <FaLinkedin className='text-white' />
                        <FaInstagram className='text-white' />
                    </div>
                </div>

            </div>
        </div>   
        
        
    </header>
  )
}

export default Header