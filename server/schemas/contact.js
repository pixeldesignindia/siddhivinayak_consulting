export default {
    name: 'contact',
    type: 'document',
    title: 'ContactUs',
    fields: [
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