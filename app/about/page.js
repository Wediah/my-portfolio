import React from 'react'

function page() {
  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
      <div className='md:pt-40 pt-32'>
      <p className='font-medium  text-orange-500'>
        Get to know me
      </p>
      <p className='pt-5 w-9/12'>
        Hello, I'm Emmanuel Wediah, a final year student at <a className='text-orange-500' href='https://atu.edu.gh/'>Accra Technical Universtity</a> studing Computer Science. Currently, my main focus is frontend web development as well as backend development with Laravel and PHP. <br/>
        <br/> I'm also a member of the <a className='text-orange-500' href='https://gdsc.community.dev/accra-technical-university/'>Google Developers Student Club (GDSC)</a> at my school, where I help organize events and workshops for students to learn about Google technologies.<br/>
         <br/> I hope to learn more about artificial intelligence and machine learning in the future. Aside from programming, I enjoy photography and editing postcasts.  
      </p>
      </div>
    </div>
  )
}

export default page