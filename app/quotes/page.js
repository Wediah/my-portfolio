import React from 'react';

const quotes = [
  {
    author: 'Albert Einstein',
    quote: 'Imagination is more important than knowledge.',
  },
  {
    author: 'Steve Jobs',
    quote: 'Stay hungry, stay foolish.',
  },
  {
    author: 'Nelson Mandela',
    quote: 'It always seems impossible until it\'s done.',
  },
];

const QuotePage = () => {
  return (
    <div className="min-h-screen px-4 md:px-32 container mx-auto">
      <h1>These are some words from people, I deem wise...</h1>
      <div className='flex flex-col gap-4 pt-4'>
        {quotes.map((quote, index) => (
            <div className='flex flex-col  rounded-md p-10' key={index}>
            <h3 className='text-orange-500'>{quote.author}</h3>
            <p>{quote.quote}</p>
            <hr className=''/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default QuotePage;
