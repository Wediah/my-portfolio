import { groq } from 'next-sanity';
import { client }  from './lib/client';

export async function getAllQuotes() {
  return client.fetch(
    groq`
    *[_type == "quotes"]{ 
        quote, 
        author, 
    }`
    );
}