
import React from 'react'
import Image from 'next/image';
import { getAllProjects } from '../../sanity/sanity.query';
import { urlForImage } from '../../sanity/lib/image';


export default async function page() {
    const projects = await getAllProjects();

  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
        <div className='md:pt-32 pt-28'>
            <h1 className='font-medium  text-gray-400 dark:text-gray-500'>
                Projects I've worked on
            </h1>
            <p className='pt-2'>This is where you can find all the projects I'm working on or have completed.</p>

            

            <div className='flex flex-col md:flex-row flex-wrap gap-3' >
                { projects && projects.map((project) => {
                    return (
                        <a href={project.link}>
                            <div className='mt-10 w-52 md:w-80 dark:bg-gray-900 bg-gray-300 rounded-md p-4'>
                                <Image src={urlForImage(project.Projectimage)} alt='project image' width={200} height={200}/>
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <p className='text-sm pt-2'>{project.description}</p>
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

