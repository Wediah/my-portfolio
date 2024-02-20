
import React from 'react'
import Image from 'next/image';
import { getAllProjects } from '../../sanity/sanity.query';


export default async function page() {
    const projects = await getAllProjects();

  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
        <div className='md:pt-32 pt-28'>
            <h1 className='font-medium  text-gray-400 dark:text-gray-500'>
                Projects I&apos;ve worked on
            </h1>
            <p className='pt-2'>This is where you can find all the projects I&apos;m working on or have completed.</p>

            

            <div className='flex flex-col md:flex-row flex-wrap gap-3' >
                { projects && projects.map((project, index) => {
                    return (
                        <a key={index} href={project.link}>
                            <div className='mt-10 w-80 dark:bg-gray-900 bg-gray-300 rounded-md p-4'>
                                {/* <Image src={project.image.url} alt={project.image.alt} width={200} height={300}/> */}
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <p className='text-sm py-2'>{project.description}</p>
                                <div className='flex flex-row flex-wrap gap-2'>
                                    {project.tools.map((tool, index) => (
                                        <button key={index} className='text-orange-500 bg-gray-300 dark:bg-gray-800 rounded-md p-1 text-sm'>
                                            {tool}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </a>
                    )
                })
                }  
            </div>
        </div>
    </div>
  )
}

