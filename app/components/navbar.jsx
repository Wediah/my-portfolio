import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'


function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-transparent fixed">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <p>Blog</p>
                    </Link>
                </li>
              
            </ul>

            <Image src={logo} alt="logo" width={50} height={50} />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;