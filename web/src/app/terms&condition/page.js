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
                        <div className='title'>Terms & Condition</div>
                        <div className='heading top-heading'>SIDDHIVINAYAK CONSULTANCY - TERMS AND CONDITIONS</div>
                        <div className='p-container' >
                            <p><b>1. ACCEPTANCE OF TERMS</b></p>
                            <p>By accessing and using the Siddhivinayak Consultancy website (hereinafter referred to as "the Website"), you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please refrain from using the Website.</p>
                            <p><b>2. PROPERTY DEALING SERVICES</b></p>
<p>Siddhivinayak Consultancy provides property dealing services, acting as an intermediary between buyers and sellers. The information provided on the Website is for general informational purposes only and should not be considered as professional advice. Siddhivinayak Consultancy is not responsible for any inaccuracies or omissions in the property listings.</p>
                            <p><b>3. USER ACCOUNT</b></p>
<p> To access certain features of the Website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Siddhivinayak Consultancy reserves the right to suspend or terminate your account if any unauthorized activity is detected.</p>
                            <p><b>4. CONTENT USAGE</b></p>
                            <p>All content on the Website, including but not limited to text, images, logos, and videos, is the property of Siddhivinayak Consultancy and is protected by copyright laws. You may not reproduce, distribute, or otherwise use any content from the Website without prior written consent from Siddhivinayak Consultancy.</p>
                            <p><b>5. PRIVACY POLICY</b></p>
                            <p>Your use of the Website is also governed by our Privacy Policy, which can be found here [insert hyperlink to the privacy policy]. By using the Website, you consent to the practices outlined in the Privacy Policy.</p>
                            <p><b>6. DISCLAIMERS</b></p>
                            <p>Siddhivinayak Consultancy makes no representations or warranties about the accuracy, completeness, or suitability of the information provided on the Website. All users are encouraged to independently verify any information before relying on it for any purpose.</p>

                            <p><b>7. LIMITATION OF LIABILITY</b></p>
                            <p>Siddhivinayak Consultancy shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the Website. This includes but is not limited to damages for lost profits, business interruption, or loss of data.</p>
                            <p> <b> 8. GOVERNING LAW</b></p>
                            <p> These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising out of or in connection with these terms shall be resolved through arbitration in accordance with the rules of the [Arbitration Institution] and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.</p>
                            <p><b>9. MODIFICATIONS TO TERMS</b></p>

                            <p>Siddhivinayak Consultancy reserves the right to update or modify these terms and conditions at any time without prior notice. Continued use of the Website after any changes shall constitute your consent to such changes.</p>
                            <p>By using the Siddhivinayak Consultancy website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you have any questions or concerns, please contact us! </p>

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