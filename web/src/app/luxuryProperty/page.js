'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg'
import '../aboutUs/about.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import chart from '../../../public/images/chart.svg'
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
import Link from 'next/link';
import './property.css'
function page() {

    const containerRef = useRef(null);
    const sectionRef = useRef(null);


    useEffect(() => {
        let scroll;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: containerRef.current,
                smooth: true,
                direction: 'vertical',
            });
        });
        return () => {
            if (scroll) scroll.destroy();
        }
    });

    const [data, setData] = useState()
    const [propertyCard, setPropertyCard] = useState()
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "luxurious"] {
                    heading,
                    "banner": banner.asset->{
                        url
                    },
                    description
                }`);
                console.log(fetchData[0]);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };

        newData();
    }, []);

    useEffect(() => {
        client
            .fetch(`
            *[_type== "post"] {
              title,
              slug,
              body,
              mainImage {
                asset -> {
                  _id,
                  url
                },
                alt,
              },
            }
          `)
            .then((data) => {
                console.log(data)
                setPropertyCard(data);
            })
            .catch(console.error);
    }, []);

    return (
        <div ref={containerRef}>
            <ClosiongNav />
            <section class="gallery" data-scroll-section >
                <div className="row posotion-container" id="pin">
                    <div className="col-8 about-left-content" style={{ paddingTop: '10rem'}}>
                        <div className='title'>Luxury Properties</div>
                        <div className='heading top-heading'>{data && data.heading}</div>
                        <div className='p-container property-card-container' >
                        {propertyCard && propertyCard.map((item, index) => (<Link href={`/luxuryProperty/${item.slug.current}`} key={index} >
                            <div className='property-card'>
                                <div className="image-property"><Image src={item.mainImage.asset.url} width={500} height={200} /></div>
                                <h3>{item.title}</h3>
                            </div>
                        </Link>))}
                        </div>
                    </div>
                    <div className="col-4 about-img-c image-disappear">
                        <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}></div>
                    </div>
                    <div className="col-7 about-left-content">
                        {/* <div className='heading' style={{margin:'2rem 0'}}>Investors of Private Equity</div>
                    <Image src={chart} width={650}/>
                    <div className='heading' style={{margin:'2rem 0'}}>Private Equity PAN India</div>
                    <p>Looking for expert Private Equity assistance? Siddhi Vinayak Consulting is your trusted partner. We offer comprehensive support to businesses throughout their journey. From fundraising and mentorship to strategic advisory, we excel in every aspect. Our specialized team manages portfolio companies, identifies growth opportunities, and ensures optimal financial outcomes. Whether you’re a startup or an established firm, our tailored solutions cater to your unique needs. Experience the power of Private Equity in Mumbai, Pune, India with us, and take your business to new heights. Partner with Siddhi Vinayak Consulting for unparalleled expertise and success.</p> */}
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}

// Export the component
export default page;
// 