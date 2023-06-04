import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from './sanityClient'

const imgbuilder = createImageUrlBuilder(client)
export const urlForiImage =(source:Image) => {
    return imgbuilder?.image(source)
}
