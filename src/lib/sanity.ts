import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: true,
    apiVersion: '2024-02-27',
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)
