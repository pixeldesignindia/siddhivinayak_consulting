import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Properties',
  type: 'document',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SeoDescription',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of:[
        {
            type:"block",
        }
    ],
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube Video URL',
      type: 'url',
    }),
    defineField({
      name: 'facilities',
      title: 'Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'facility',
          title: 'Facility',
          fields: [
            {
              name: 'amenity',
              title: 'Amenity',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'imgages',
      title: 'PropertyImages',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'propertyImg',
          title: 'PropertyImage',
          fields: [
            {
              name: 'img',
              title: 'ImageOfProperty',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'near',
      title: 'NearBy',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'nearImg',
          title: 'NearImages',
          fields: [
            {
              name: 'near',
              title: 'NearByImage',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'nearText',
              title: 'NearByText',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'configuration',
      title: 'Configuration',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'area',
              title: 'Area',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'FAQ',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
