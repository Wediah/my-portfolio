import React from 'react'
import Image from 'next/image'
import logo2 from '/public/logo2.svg'

function Footer() {
  return (
    <div className='container mx-auto px-4 md:px-16 h-full'>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex justify-between items-center h-full'>
            <span>
                ©2024 Emmanuel Wediah. All rights reserved. <br />
                Source code: <a href="https://github.com/Wediah/my-portfolio">/github.com/Wediah/my-portfolio</a>
            </span>

        </div>
    </div>
  )
}

export default Footer;