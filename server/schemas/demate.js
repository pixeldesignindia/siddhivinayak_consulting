export default {
    name: 'demate',
    type: 'document',
    title: 'DemateAccount',
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