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
      <h1>Famous Quotes</h1>
      <div className='flex flex-col gap-2'>
        {quotes.map((quote, index) => (
            <div className='flex flex-col bg-gray-700 rounded-md p-10' key={index}>
            <h3>{quote.author}</h3>
            <p>{quote.quote}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default QuotePage;
