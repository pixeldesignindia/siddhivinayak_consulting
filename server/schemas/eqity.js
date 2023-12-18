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
        }
    ]
}