'use client'
import React, { useEffect, useState } from 'react'
import client from '../../client'

async function page() {

  const projects = await client.fetch(`*[_type == "project"]{
    title, slug, description, tags, link, image
  }`)
  console.log(projects);
  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
        <div className='md:pt-32 pt-28'>
            <h1 className='font-medium  text-gray-400 dark:text-gray-500'>
                Projects I've worked on
            </h1>

            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default page