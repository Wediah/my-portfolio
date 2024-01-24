import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'


function Navbar() {
  return (
    <>
      <div className="w-full z-20 h-20 bg-transparent sticky">
        <div className="container mx-auto px-4 md:px-16 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 font-medium text-black dark:text-white relative">
                <li className='peer/home hover:bg-gray-200 p-1 rounded-md'>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li className='peer/about hover:bg-gray-200 p-1 rounded-md'>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
                <li className='peer/projects hover:bg-gray-200 p-1 rounded-md'>
                    <Link href="/projects">
                        <p>Projects</p>
                    </Link>
                </li>
                <li className='peer/blog hover:bg-gray-200 p-1 rounded-md'>
                    <Link href="/blog">
                        <p>Blog</p>
                    </Link>
                </li>

                <span class="absolute left-0 -z-10 h-full w-1/5 origin-center scale-x-110 scale-y-125 rounded-md bg-gray-200 transition-all duration-300 peer-focus/about:left-[20%] peer-focus/services:left-[40%] peer-focus/blog:left-[60%] peer-focus/contact:left-[80%]"></span>
              
            </ul>

            <Image src={logo} alt="logo" width={60} height={60} />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;