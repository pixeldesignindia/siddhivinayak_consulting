'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg'
import mail from '../../../public/images/email.svg'

import '../aboutUs/about.css'
import './fund.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
// import office from '../../../public/images/boffice.svg'
import ClosingFundNav from '../components/ClosingNav/ClosingFundNav';
// import bmail from '../../../public/images/bmail.svg'
// import mobile from '../../../public/images/bphone.svg'
// import profile from '../../../public/images/bpro.svg'
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
                const fetchData = await client.fetch(`*[_type == "fund"] {
                    "img1": img1.asset->{
                        url
                    },
                    "img2": img2.asset->{
                        url
                    },
                    "img3": img3.asset->{
                        url
                    },
                    philosophy
                }`);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newData();
    }, []);

    return (
        <div ref={containerRef}>
            < ClosingFundNav/>
            <section class="gallery" data-scroll-section >

                <Footer/>
            </section>
            
        </div>
    );
}

// Export the component
export default page;
// 