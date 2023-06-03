import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { products } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category],
}
