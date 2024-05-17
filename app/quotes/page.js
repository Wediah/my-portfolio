import React from 'react';
import { getAllQuotes } from '../../sanity/sanity1.query';

// const quotes = [
//   {
//     author: 'Albert Einstein',
//     quote: 'Imagination is more important than knowledge.',
//   },
//   {
//     author: 'Steve Jobs',
//     quote: 'Stay hungry, stay foolish.',
//   },
//   {
//     author: 'Nelson Mandela',
//     quote: 'It always seems impossible until it\'s done.',
//   },
// ];

export default async function page() {
  const quotes = await getAllQuotes();

  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
      <h1 className='pb-4'>These are some words from people, I deem wise</h1>
      <div className='flex flex-col md:flex-row flex-wrap gap-3'>
        { quotes && quotes.map((quote, index) => (
            <div className='w-11/12 md:w-80 dark:bg-gray-900 bg-gray-300 rounded-md p-4 ' key={index}>
            <p>{quote.quote}</p>
            <h3 className='text-orange-500'>{quote.author}</h3>
            </div>
        ))}
      </div>
    </div>
  );
};


