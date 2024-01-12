'use client'
import React, { useEffect, useRef, useState } from 'react';
import InnerNav from '../components/Nav/InnerNav';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
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
    return (
        <div ref={containerRef} className='page-content'>
            {windowWidth > 500 ? (<InnerNav />) : (<ClosiongNav />)}

            <section class="gallery" data-scroll-section >
                {/* <div className="col-12 about-img-c ">
                    <div className="about-img center"  style={{
            backgroundImage: `url(${data && data.banner.url})`,
        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Terms & Condition</h1></div>
                </div> */}
                <div className="row posotion-container" >
                    <div className="col-12 about-left-content bg" style={{ marginTop: '5rem' }}>
                        <div className='title'>Cookies Policy</div>
                        <div className='heading top-heading'>SIDDHIVINAYAK CONSULTANCY - COOKIES POLICY</div>
                        <div className='p-container' >
                        <p><b>1. TYPES OF COOKIES WE USE</b></p><p>a. Essential Cookies: These cookies are necessary for the website to function properly. They enable basic functions such as page navigation and access to secure areas of the website.</p>
                        <p>b. Analytical/Performance Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They assist in improving website functionality and user experience.</p>
                        <p>c. Functionality Cookies: These cookies enable the website to remember choices you make (such as language preferences) and provide enhanced features.</p>
                        <p>d. Targeting/Advertising Cookies: These cookies are used to deliver content that is more relevant to you and your interests. They may be used to deliver targeted advertising or to limit the number of times you see an advertisement.</p>
                            <p><b>2. HOW WE USE COOKIES</b></p>
<p>a. Improving Website Functionality: Cookies help us enhance the functionality and performance of our website.</p>
<p>b. Analyzing Website Usage: We use cookies to analyze how visitors use our website, identify popular pages, and understand user preferences.</p>
<p>c. Personalization: Cookies assist in personalizing your experience by remembering your preferences.</p>
                            
                        </div>
                    </div>
                    <div className="col-7 about-left-content res-none">
                    </div>
                </div>
                <Footer />
            </section>
            <Enquiry />
        </div>
    );
}


export default page;