'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../aboutUs/about.css'
import './fund.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
import ClosingFundNav from '../components/ClosingNav/ClosingFundNav';
import InnerNav from '../components/Nav/InnerNav';
gsap.registerPlugin(ScrollTrigger);

function page() {

    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
  
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
  
        window.addEventListener("resize", handleResize);
  
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);
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
            <section class="gallery" data-scroll-section >

                <Footer/>
            </section>
            
        </div>
    );
}

// Export the component
export default page;
// 