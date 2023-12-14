export default {
    name: 'fund',
    type: 'document',
    title: 'FundRising',
    fields: [
        {
            name: 'philosophy',
            type: 'array',
            title: 'Philosophy',
            of:[
                {
                    type:"block",
                }
            ],
        },
        {
            name: 'img1',
            type: 'image',
            title: 'Image1',
            options: {
                hotspot: true
            }
        },
        {
            name: 'img2',
            type: 'image',
            title: 'Image2',
            options: {
                hotspot: true
            }
        },
        {
            name: 'img3',
            type: 'image',
            title: 'Image3',
            options: {
                hotspot: true
            }
        }
    ]
}