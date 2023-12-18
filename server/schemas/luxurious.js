export default {
    name: 'luxurious',
    type: 'document',
    title: 'Luxurious',
    fields: [
        {
            name: 'seoDescription',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'seoTitle',
            type: 'string',
            title: 'SeoTitle'
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of:[
                {
                    type:"block",
                }
            ],
        },
        {
            name: 'banner',
            type: 'image',
            title: 'Banner',
            options: {
                hotspot: true
            }
        }
    ]
}