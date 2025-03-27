import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: '5b16yo6s',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-02-27',
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)
