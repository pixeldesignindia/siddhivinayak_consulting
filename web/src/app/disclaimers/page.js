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
                        <div className='title'>Disclaimers</div>
                        <div className='heading top-heading'>SIDDHIVINAYAK CONSULTANCY - DISCLAIMERS</div>
                        <div className='p-container' >
                            <p>This Privacy Policy outlines how Siddhivinayak Consultancy (referred to as "we," "our," or "us") collects, uses, discloses, and protects your personal information when you use our website. By accessing and using the Siddhivinayak Consultancy website, you consent to the practices described in this Privacy Policy.</p>
                            <p><b>1. NO PROFESSIONAL ADVICE</b></p>
<p>The content on our website is not intended to constitute professional advice. It is important to seek the advice of qualified professionals for specific information or assistance related to property dealings or any other matters.</p>
                            <p><b>2. PROPERTY LISTINGS</b></p>
<p>We strive to provide accurate and up-to-date information on property listings. However, we do not warrant or represent that the information on our website is error-free, and we are not responsible for any inaccuracies, omissions, or misrepresentations.</p>
                            <p><b>3. USE AT YOUR OWN RISK</b></p>
                            <p>Your use of the Siddhivinayak Consultancy website is at your own risk. We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website.</p>
                            <p><b>4. THIRD-PARTY LINKS</b></p>
                            <p>Our website may contain links to third-party websites. These links are provided for your convenience, and we do not endorse or assume responsibility for the content or practices of linked websites. We encourage you to review the privacy policies and terms of use of any third-party sites.</p>
                            <p><b>5. CHANGES TO DISCLAIMER</b></p>
                            <p>We reserve the right to update or modify this disclaimer at any time without prior notice. It is your responsibility to check for updates. Continued use of our website after any changes constitutes your acceptance of the revised disclaimer.</p>
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