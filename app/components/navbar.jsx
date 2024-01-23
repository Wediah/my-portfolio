import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-transparent">
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
                    <Link href="/contact">
                        <p>Contact</p>
                    </Link>
                </li>
                {/* <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li> */}
              
            </ul>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;