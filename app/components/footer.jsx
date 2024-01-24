import React from 'react'
import Image from 'next/image'
import logo2 from '/public/logo2.svg'

function Footer() {
  return (
    <div className='container mx-auto px-4 md:px-16 h-full pb-4'>
        <hr class="h-px my-4 bg-black border-0 dark:bg-white"></hr>

        <div className='flex justify-between items-center h-full'>
        <Image src={logo2} alt="logo" width={50} height={50} />

            <span className=' text-md text-black dark:text-white'>
                ©2024 Emmanuel Wediah. All rights reserved. <br />
                <p className='text-sm font-mono text-right'>
                    Source code: 
                    <a className='underline pl-1' href="https://github.com/Wediah/my-portfolio">
                        /github.com/Wediah/my-portfolio
                    </a>
                    </p>
            </span>

            
        </div>
    </div>
  )
}

export default Footer;