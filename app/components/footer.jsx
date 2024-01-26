import React from 'react'
import Image from 'next/image'
import logo2 from '/public/logo2.svg'
import { LuGithub } from "react-icons/lu";
import { PiImages } from "react-icons/pi";
import { BsChatSquareQuote } from "react-icons/bs";


function Footer() {
  return (
    <div className='container mx-auto px-4 md:px-16 h-full pb-4'>
        <hr class="h-px my-4 bg-black border-0 dark:bg-white decoration-wavy"></hr>

        <div className='flex justify-between items-center h-full'>
        <Image src={logo2} alt="logo" width={50} height={50} />

            <span className=' text-md text-black dark:text-white'>
                ©2024 Emmanuel Wediah. All rights reserved. <br />
                <div className='flex flex-row gap-2'>
                  <button className='items-center flex gap-1 dark:bg-gray-900 bg-gray-200 rounded-md p-1'>
                      Source code
                      <LuGithub />
                  </button>
                  <button className='items-center flex gap-1 dark:bg-gray-900 bg-gray-200 rounded-md p-1'>
                      JPEGs
                      <PiImages />
                  </button>
                  <button className='items-center flex gap-1 dark:bg-gray-900 bg-gray-200 rounded-md p-1'>
                      Quotes
                      <BsChatSquareQuote />
                  </button>
                </div>
            </span>

            
        </div>
    </div>
  )
}

export default Footer;