import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '@/lib/sanity'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const query = `*[_type == "person"] {
            _id,
            name,
            role,
            image,
            description
        }`
        const people = await sanityClient.fetch(query)
        res.status(200).json(people)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch about page data' })
    }
}
