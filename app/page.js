import Image from "next/image";
import { PiHandWavingLight } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { getAllProjects } from '../sanity/sanity.query';



export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="flex min-h-screen px-4 md:px-32 container mx-auto ">
      <div className="md:pt-32 pt-28">
        <button className="flex items-center gap-1 bg-green-600 rounded-md p-1">
          <PiHandWavingLight className="text-white font-medium text-md"/> Welcome to my website. 
        </button>
        <p className="pt-5 text-md">
          I'm Wediah Emmanuel. A Software Engineer from Ghana. <br />
          On this website, you'll find my projects, blog posts and more.
        </p>
        <div className="flex flex-row gap-2">
          <a href="https://github.com/Wediah">
            <LuGithub className="text-2xl text-gray-500 hover:text-gray-700" />
          </a>
          <a href="https://www.linkedin.com/in/wediah-emmanuel-578330230">
            <AiOutlineLinkedin className="text-2xl text-gray-500 hover:text-gray-700" />
          </a>
          <a href="https://twitter.com/WediahE">
            <RiTwitterXLine className="text-2xl text-gray-500 hover:text-gray-700" />
          </a>
          <a href="https://www.instagram.com/_wediah/">
            <IoLogoInstagram className="text-2xl text-gray-500 hover:text-gray-700" />
          </a>
          <a href="mailto:emmanuelwediah@gmail.com">
            <IoMailOutline className="text-2xl text-gray-500 hover:text-gray-700" />
          </a>
        </div>

        <div className="md:pt-32 pt-28">
          <h1 className="text-2xl font-medium text-gray-700">Featured Projects</h1>

          <div className='flex flex-col md:flex-row flex-wrap gap-3' >
                { projects && projects.slice(0, 3).map((project) => {
                    return (
                        <a href={project.link}>
                            <div className='mt-10 w-52 md:w-80 dark:bg-gray-900 bg-gray-300 rounded-md p-4'>
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
    </main>
  );
}
