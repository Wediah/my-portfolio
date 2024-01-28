import React from 'react'


function page() {
  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
      <div className='md:pt-40 pt-32'>
      <h1 className='font-medium  text-gray-200 dark:text-gray-500'>
        Get to know me
      </h1>
      <p className='pt-5 w-9/12'>
        Hello, I'm Emmanuel Wediah, a final year student at <a className='text-orange-500' href='https://atu.edu.gh/'>Accra Technical Universtity</a> studing Computer Science. Currently, my main focus is frontend web development as well as backend development with Laravel and PHP. <br/>
        <br/> I'm also a member of the <a className='text-orange-500' href='https://gdsc.community.dev/accra-technical-university/'>Google Developers Student Club (GDSC)</a> at my school, where I help organize events and workshops for students to learn about Google technologies.<br/>
         <br/> I hope to learn more about artificial intelligence and machine learning in the future. Aside from programming, I enjoy <a className='text-orange-500' href='/jpegs'>photography</a> and <a className='text-orange-500' href='https://open.spotify.com/show/05qwLlxgmpwf2R9mvkuNSp?si=d93ea9532ed24c3d'>editing podcasts</a>.  
      </p>

      </div>

      <div className='pt-10 w-9/12'>
        <h1 className='font-medium text-gray-200 dark:text-gray-500'>My experiences</h1>
        
<ol class="relative border-s border-gray-200 dark:border-gray-700 mt-5">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov. 2023 - Present</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Freelance Frontend Developer </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Helping brands and individuals enhance their online presence by developing user-friendly and visual appealing websites. </p>
        
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct. 2023 - Nov. 2023</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Backend Engineer Intern - <a className='text-orange-500' href='https://www.linkedin.com/company/itspoynt/'>Poynt Technologies Limited</a></h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">At Poynt, I became involved  </p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>


      </div>
    </div>
  )
}

export default page