import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: '2024-01-28', // use a specific API version, or use 'v2021-03-25' for the latest
  dataset: 'production',
  projectId: 'qe0yd7qt',
  useCdn: false, // `false` if you want to ensure fresh data
})
