import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-black text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
           
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;