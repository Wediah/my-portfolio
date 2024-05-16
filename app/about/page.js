"use client";
import React from 'react'


function page() {


  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/WediahEmmanuelresume.docx';
    link.download = 'WediahEmmanuelresume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
      <div className='md:pt-32 pt-28'>
      <h1 className='font-medium  text-gray-400 dark:text-gray-500'>
        Get to know me
      </h1>
      <p className='pt-5 w-9/12'>
        Hello, I&apos;m Emmanuel Wediah,a student at <a className='text-orange-500' href='https://atu.edu.gh/'>Accra Technical Universtity</a> studing Computer Science. Currently, my main focus is backend development with Laravel and PHP as well as frontend web development with React and JavaScript. I look to becoming an expect in artificial intelligence and machine learning in the near future. <br/>
        <br/> I&apos;m also a member of the <a className='text-orange-500' href='https://gdsc.community.dev/accra-technical-university/'>Google Developers Student Club (GDSC)</a> at my school, where I moderate and help organize events and workshops for students to learn about Google technologies. Aside programming, I enjoy <a className='text-orange-500' href='/jpegs'>photography</a>, music and <a className='text-orange-500' href='https://open.spotify.com/show/05qwLlxgmpwf2R9mvkuNSp?si=d93ea9532ed24c3d'>editing podcasts</a>.  

         <br/><br/>
         &quot;Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy—meditate on these things&quot;. <a className='text-orange-500' href='https://www.bible.com/app'>Philippians 4:8 NKJV</a> - this is my modus operandi.



      </p>

      </div>

      <div className='pt-10 w-9/12'>
        <h1 className='font-medium text-gray-400 dark:text-gray-500'>My experiences</h1>
        
        <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-5 mb-12">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov. 2023 - Present</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Freelance Software Developer </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Helping brands and individuals enhance their online presence by developing user-friendly and visual appealing websites. </p>
                <div className='flex flex-row flex-wrap gap-3'>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">React</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Next.js</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Tailwind CSS</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Figma</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">PHP</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Laravel</button>
                </div>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept. 2023 - Oct. 2023</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Backend Engineer Intern - <a className='text-orange-500' href='https://www.linkedin.com/company/itspoynt/'>Poynt Technologies Limited</a></h3>
                <p class=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">At Poynt, I became involved with backend development with PHP and Laravel. I learnt how to make restful API&apos;s and improve some soft skills with the help of these amazing people <a className='text-orange-500' href='https://www.linkedin.com/in/sadat-kollan'>Hillary Kollan</a> and <a className='text-orange-500' href='https://www.linkedin.com/in/el-karece-asiedu'>El-Karece Asiedu</a> as well as the whole team at Poynt.</p>
                <div className='flex flex-row flex-wrap gap-3'>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">PHP</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Laravel</button>
                </div>
            </li>
            <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct. 2023 - Nov. 2023</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Frontend Engineer Intern - <a className='text-orange-500' href='https://insti.csir.org.gh/'>CSIR - insti</a></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">At CSIR - INSTI, I got to understand how the working environment outside school felt like. And also learn the basics of frontend engineering with the help of <a className='text-orange-500' href='https://www.linkedin.com/in/johnawotwi'>John Awotwi</a></p>
                <div className='flex flex-row flex-wrap gap-3'>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">HTML</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">CSS</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">JavaScript</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">JQery</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">React</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Next.js</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Tailwind CSS</button>
                  <button className="rounded-md bg-gray-200 dark:bg-gray-900 p-1">Figma</button>
                </div>
            </li>
        </ol>

        <button className='text-orange-500 text-md font-medium'type="button" onClick={handleClick}>There is more about my experiences here.</button>



      </div>
    </div>
  )
}

export default page