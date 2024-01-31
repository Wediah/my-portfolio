import { groq } from 'next-sanity';
import { client }  from './lib/client';

export async function getAllProjects() {
  return client.fetch(
    groq`
    *[_type == "project"]{ 
        title, 
        description, 
        link, 
        image
    }`
    );
}