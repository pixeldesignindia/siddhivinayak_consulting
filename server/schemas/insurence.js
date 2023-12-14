export default {
    name: 'insurence',
    type: 'document',
    title: 'Insurence',
    fields: [
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