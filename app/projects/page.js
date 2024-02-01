'use client'
import React from 'react'
import { ImageUrlBuilder } from 'sanity';
//import client from '/sanity/lib/client.ts'
import { getAllProjects } from '../../sanity/sanity.query';


export default async function page() {
    const projects = await getAllProjects();

    console.log(projects);


  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
        <div className='md:pt-32 pt-28'>
            <h1 className='font-medium  text-gray-400 dark:text-gray-500'>
                Projects I've worked on
            </h1>
            <p>This is where you can find projects I'm working on or have completed</p>

            <div className=''>
                { projects && projects.map((project) => {
                    return (
                        <div className='mt-10'>
                            <h1>{project.title}</h1>
                        </div>
                    )
                })
                }  
            </div>
        </div>
    </div>
  )
}

