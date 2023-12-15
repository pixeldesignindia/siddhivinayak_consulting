import React from 'react'
import Business from './Business'
import client from '../sanity/client'
const url = process.env.NEXT_PUBLIC_URL
export async function generateMetadata() {
    const metaData = await client.fetch(`*[_type == "insurence"] {
        heading,
        "banner": banner.asset->{
            url
        },
        description,
        seoTitle,
        seoDescription,
    }`);
    console.log(metaData[0]);
    return {
        title:metaData[0].seoTitle,
        description: metaData[0].seoDescription,
        alternates: {
            canonical: url+'businessInsurance',
            languages: {
                'en-US': 'https://nextjs.org/en-US',
                'de-DE': 'https://nextjs.org/de-DE',
            },
        },
        openGraph: {
            title: metaData[0].seoTitle,
            description: metaData[0].seoDescription,
            url: url+'businessInsurance',
            siteName: url,
            // images: [
            //     {
            //         url: 'https://nextjs.org/og.png',
            //         width: 800,
            //         height: 600,
            //     },
            //     {
            //         url: 'https://nextjs.org/og-alt.png',
            //         width: 1800,
            //         height: 1600,
            //         alt: 'My custom alt',
            //     },
            // ],
            locale: 'en_US',
            type: 'website',
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        twitter: {
            card: url,
            title: metaData[0].seoTitle,
            description: metaData[0].seoDescription,
            siteId: '1467726470533754880',
            creator: '@nextjs',
            creatorId: '1467726470533754880',
            images: ['https://nextjs.org/og.png'],
        },
    }
}
function page() {
    return (
        <div>
            <Business/>
        </div>
    )
}

export default page
