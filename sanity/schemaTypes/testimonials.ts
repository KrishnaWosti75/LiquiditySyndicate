// schemas/testimonials.js
export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role/Position',
            type: 'string',
        },
        {
            name: 'testimonial',
            title: 'Testimonial Text',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'socialLink',
            title: 'Social Link',
            type: 'url',
        },
    ],
}
