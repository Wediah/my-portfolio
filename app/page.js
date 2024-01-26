import Image from "next/image";
import { PiHandWavingLight } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex min-h-screen  ">
      <div>
        <button className="flex items-center gap-1 bg-green-600 rounded-md p-1">
          <PiHandWavingLight className="text-white"/> Welcome to my website. 
        </button>
        <p>
          I'm Wediah Emmanuel. A Software Engineer from Ghana. <br />
          On this website, you'll find my projects, blog posts and more.
        </p>
      </div>
    </main>
  );
}
