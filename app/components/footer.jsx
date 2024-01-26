'use client'
import React, { useState} from 'react'
import Image from 'next/image'
import logo2 from '/public/logo2.svg'
import { LuGithub } from "react-icons/lu";
import { PiImages } from "react-icons/pi";
import { BsChatSquareQuote } from "react-icons/bs";
import { Transition } from '@headlessui/react'


function Footer() {
  

  return (
    <div className='container mx-auto px-4 md:px-16 h-full pb-4'>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-white "></hr>

        <div className='flex-col md:flex-row flex md:justify-between md:items-center h-full gap-2'>
          <Image src={logo2} alt="logo" width={50} height={50} />

            <span className='text-sm md:text-md text-black dark:text-white'>
                ©2024 Emmanuel Wediah. All rights reserved. <br />
                <div className='flex flex-row gap-2 md:pl-12'>
                  <a href="https://github.com/Wediah/my-portfolio">
                  <button className='items-center flex gap-1 dark:bg-gray-900 bg-gray-200 rounded-md p-1'>
                      Source code
                      <LuGithub />
                  </button>
                  </a>
                  <a href="/jpegs">
                  <button className='items-center flex gap-1 dark:bg-gray-900 bg-gray-200 rounded-md p-1'>
                      JPEGs
                      <PiImages />
                  </button>
                  </a>
                  <a href="/quotes">
                  <button className='items-center flex gap-1 dark:bg-gray-900 bg-gray-200 rounded-md p-1'>
                      Quotes
                      <BsChatSquareQuote />
                  </button>
                  </a>
                </div>
            </span>

            
        </div>

        
    </div>
  )
}

export default Footer;