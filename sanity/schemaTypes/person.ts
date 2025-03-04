export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [{ type: 'url' }],
        },
        {
            name: 'description',
            title: 'descriptions',
            type: 'string'
        }
    ],
};