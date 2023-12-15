import React from 'react'
import About from './About'
import client from '../sanity/client'
const url = process.env.NEXT_PUBLIC_URL
export async function generateMetadata() {
    const aboutData = await client.fetch(`*[_type == "about"] {
        seoTitle,
        seoDescription,
        aboutHeading,
        "aboutBanner": aboutBanner.asset->{
            url
        },
        aboutDescription
    }`);
    console.log(aboutData[0]);
    return {
        title:aboutData[0].seoTitle,
        description:aboutData[0].seoDescription,
        alternates: {
            canonical: url+'aboutUs',
            languages: {
                'en-US': 'https://nextjs.org/en-US',
                'de-DE': 'https://nextjs.org/de-DE',
            },
        },
        openGraph: {
            title: 'Next.js',
            description: 'The React Framework for the Web',
            url: url+'aboutUs',
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
            card: url+'about',
            title: 'Next.js',
            description: 'The React Framework for the Web',
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
            <About />
        </div>
    )
}

export default page
