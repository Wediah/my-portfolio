'use client'
import React, { useEffect, useState } from 'react'
import client from '../../client'

async function page() {

  const projects = await client.fetch(`*[_type == "project"]{
    title, description, link, image
  }`)

  console.log(projects);


  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
        <div className='md:pt-32 pt-28'>
            <h1 className='font-medium  text-gray-400 dark:text-gray-500'>
                Projects I've worked on
            </h1>

            <div className=''>
                {projects.map((project, index) => (
                    <div className='md:py-16 py-10' key={index}>
                        <div className='md:flex md:justify-between'>
                            <div className='md:w-1/2'>
                                <h1 className='text-3xl font-medium text-gray-800 dark:text-gray-100'>
                                    {project.title}
                                </h1>
                                <p className='text-gray-400 dark:text-gray-500'>
                                    {project.description}
                                </p>
                                <a href={project.link} target='_blank' className='text-blue-500 dark:text-blue-400'>
                                    {project.link}
                                </a>
                            </div>
                            <div className='md:w-1/2 md:mt-0 mt-10'>
                                <img src={project.image} alt="" className='rounded-lg' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page