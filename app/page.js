import Image from "next/image";
import { PiHandWavingLight } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";


export default function Home() {
  return (
    <main className="flex min-h-screen px-4 md:px-16 container mx-auto ">
      <div className="md:pt-40">
        <button className="flex items-center gap-1 bg-green-600 rounded-md p-1">
          <PiHandWavingLight className="text-white text-md"/> Welcome to my website. 
        </button>
        <p className="pt-5 text-md">
          I'm Wediah Emmanuel. A Software Engineer from Ghana. <br />
          On this website, you'll find my projects, blog posts and more.
        </p>
        <div className="flex flex-row gap-2">
          <LuGithub className="text-2xl text-gray-500 hover:text-gray-700" />
          <AiOutlineLinkedin className="text-2xl text-gray-500 hover:text-gray-700" />
          <RiTwitterXLine className="text-2xl text-gray-500 hover:text-gray-700" />
          <IoLogoInstagram className="text-2xl text-gray-500 hover:text-gray-700" />
        </div>
      </div>
    </main>
  );
}
