import React from 'react'
import logo from '../assets/logo.png'
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram    } from "react-icons/fa";
import cert1 from '../assets/Cert1.png'
import cert2 from '../assets/Cert2.png'


const Footer = () => {
  return (
    <section className='bg-[#1F1F1F]'>
        <div className='max-w-container mx-auto'>

        <div className='flex flex-wrap lg:flex-row flex-col items-center'>
            <div className='lg:w-1/4 w-full flex flex-col lg:pe-[145px]'>
                <img src={logo} alt="" className='pt-[149px] ' />
                <div className='flex gap-x-2 items-center  py-2'>
                        <CiMail className='text-white'/>
                        <p className='text-white font-pops pe-6'>mail@yourcompany.com</p>
                    </div>
                    <div className='flex gap-x-2 items-center   py-2 '>
                        <MdAddCall className='text-white'/>
                        <p className='text-white font-pops'>+896 120 5889 (Toll free)</p>

                    </div>
                    <div className='flex gap-x-3  py-2  lg:pb-[170px] pb-[10px] '>
                        <FaFacebookF className='text-white'/>
                        <FaTwitter className='text-white'/>
                        <FaLinkedin className='text-white' />
                        <FaInstagram className='text-white' />
                    </div>
            </div>


            <div className='w-full lg:w-1/4 flex flex-col mt-[-49px] lg:pt-[0] pt-[100px]'>
                <ul className='gap-y-[15px]'>
                    <li className='font-pops font-bold text-[16px] text-white'>Company</li>
                    <li className='font-pops font-light text-[14px] text-white'>Home</li>
                    <li className='font-pops font-light text-[14px] text-white'>About</li>
                    <li className='font-pops font-light text-[14px] text-white'>Services</li>
                    <li className='font-pops font-light text-[14px] text-white'>Gallery</li>
                </ul>
            </div>


            <div className='w-full lg:w-1/4 flex flex-col mt-[-49px] lg:pt-[0] pt-[100px]'>
                <ul className='gap-y-[15px]'>
                    <li className='font-pops font-bold text-[16px] text-white'>Others</li>
                    <li className='font-pops font-light text-[14px] text-white'>Blog</li>
                    <li className='font-pops font-light text-[14px] text-white'>Contact</li>
                    <li className='font-pops font-light text-[14px] text-white'>Terms & Conditions</li>
                    <li className='font-pops font-light text-[14px] text-white'>Privacy Policy</li>
                </ul>
            </div>


            <div className=' w-full lg:w-1/4 flex flex-col mt-[-49px] lg:pt-[0] pt-[100px] pb-[48px]'>
             <h2 className='font-pops font-bold text-[16px] text-white'>Certificate</h2>
             <div className='flex gap-x-2 '>
                <img src={cert1} alt="" />
                <img src={cert2} alt="" />
             </div>
            </div>
            </div>
        </div>
        
    </section>
  )
}

export default Footer