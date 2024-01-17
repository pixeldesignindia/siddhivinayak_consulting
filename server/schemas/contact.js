export default {
    name: 'contact',
    type: 'document',
    title: 'Contact Us',
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
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
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