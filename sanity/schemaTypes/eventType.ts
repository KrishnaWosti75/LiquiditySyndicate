import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Event Name',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(100),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().max(500),
        }),
        defineField({
            name: 'date',
            title: 'Event Date & Time',
            type: 'datetime',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'registrationPage',
            title: 'Registration Page URL',
            type: 'url',
            description: 'Enter the URL where users will register for this event.',
            validation: Rule => Rule.required().uri({ scheme: ['http', 'https'] }),
        }),
    ],
})
