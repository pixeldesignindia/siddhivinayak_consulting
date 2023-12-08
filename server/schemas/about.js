export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'aboutHeading',
            type: 'string',
            title: 'AboutHeading'
        },
        {
            name: 'aboutDescription',
            type: 'array',
            title: 'Description',
            of:[
                {
                    type:"block",
                }
            ],
        },
        {
            name: 'aboutBanner',
            type: 'image',
            title: 'AboutBanner',
            options: {
                hotspot: true
            }
        }
    ]
}