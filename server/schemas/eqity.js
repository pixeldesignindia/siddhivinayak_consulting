export default {
    name: 'equity',
    type: 'document',
    title: 'PrivateEquity',
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
            name: 'equityHeading',
            type: 'string',
            title: 'EquityHeading'
        },
        {
            name: 'equityDescription',
            type: 'array',
            title: 'EquityDescription',
            of:[
                {
                    type:"block",
                }
            ],
        },
        {
            name: 'equityBanner',
            type: 'image',
            title: 'EquityBanner',
            options: {
                hotspot: true
            }
        },
        {
            name: 'chart',
            type: 'image',
            title: 'Chart',
            options: {
                hotspot: true
            }
        },
        {
            name: 'news',
            type: 'array',
            title: 'News',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'News Heading',
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'News Title',
                        },
                        {
                            name: 'point1',
                            type: 'string',
                            title: 'First Point',
                        },
                        {
                            name: 'point2',
                            type: 'string',
                            title: 'Second Point',
                        },
                        {
                            name: 'point3',
                            type: 'string',
                            title: 'Third Point',
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'News Image',
                            options: {
                                hotspot: true,
                            },
                        },
                    ],
                },
            ],
        },
    ]
}
