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
    // useEffect(() => {
    //     const pin = gsap.to(sectionRef.current, {
    //         y: 0,
    //         scrollTrigger: {
    //             trigger: sectionRef.current,
    //             pin: true,
    //             start: 'top top',
    //             end: 'bottom bottom',
    //             scrub: 1,
    //         },
    //     });

    //     return () => {
    //         pin.kill();
    //     };
    // }, []);

    return (
        <div ref={containerRef}>
            <ClosiongNav />
            <section class="gallery" data-scroll-section id="pin">
                <div className="row posotion-container" >
                    <div className="col-8 about-left-content" style={{ paddingTop: '10rem' }}>
                        <div className='title'>Luxury Properties</div>
                        <div className='heading'>{data && data.heading}</div>
                        <div className='p-container'>

                            {data && data.description && data.description.map((block, index) => (
                                <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text} {block.children[2] && block.children[2].text}
                                    {block.children[3] && block.children[3].text}
                                    {block.children[4] && block.children[4].text}
                                    {block.children[5] && block.children[5].text}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="col-4 about-img-c">
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
                </div></section>
        </div>
    );
}

// Export the component
export default page;
// 