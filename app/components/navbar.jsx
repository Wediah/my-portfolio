import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'
import { useRouter } from 'next/router'


function Navbar() {
  return (
    <>
      <div className="w-full z-20 h-20 bg-transparent sticky">
        <div className="container mx-auto px-4 md:px-16 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-4 font-medium text-black dark:text-white relative z-0">
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 p-1 rounded-md flex-1'>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 p-1 rounded-md flex-1'>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 p-1 rounded-md flex-1'>
                    <Link href="/projects">
                        <p>Projects</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 p-1 rounded-md flex-1'>
                    <Link href="/blog">
                        <p>Blog</p>
                    </Link>
                </li>
              
            </ul>

            

            <Image src={logo} alt="logo" width={60} height={60} />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;