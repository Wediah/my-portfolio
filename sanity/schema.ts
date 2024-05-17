import { type SchemaTypeDefinition } from 'sanity'
import projects from './schemas/projects'
import quotes from './schemas/quotes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, quotes],
}
