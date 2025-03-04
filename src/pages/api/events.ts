import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '@/lib/sanity'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch events
        const eventsQuery = `*[_type == "event"] { 
            _id, 
            name, 
            description, 
            date, 
            location, 
            image,
            registrationPage
        } | order(date asc)`

        // Fetch testimonials
        const testimonialsQuery = `*[_type == "testimonial"] { 
            _id, 
            name, 
            role, 
            testimonial,
            image,
            socialLink
        }`

        // Fetch both events and testimonials
        const [events, testimonials] = await Promise.all([
            sanityClient.fetch(eventsQuery),
            sanityClient.fetch(testimonialsQuery),
        ])

        // Return both events and testimonials in the response
        res.status(200).json({ events, testimonials })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch events and testimonials' })
    }
}
