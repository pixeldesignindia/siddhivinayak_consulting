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
                        <div className='title'>Privacy Policy</div>
                        <div className='heading top-heading'>SIDDHIVINAYAK CONSULTANCY - PRIVACY POLICY</div>
                        <div className='p-container' >
                            <p>This Privacy Policy outlines how Siddhivinayak Consultancy (referred to as "we," "our," or "us") collects, uses, discloses, and protects your personal information when you use our website. By accessing and using the Siddhivinayak Consultancy website, you consent to the practices described in this Privacy Policy.</p>
                            <p><b>1. INFORMATION WE COLLECT</b></p>
                            <p>a. Personal Information: We may collect personal information such as your name, email address, phone number, and other contact details when you voluntarily provide them through our website forms or other communication channels.</p>
                            <p>b. Usage Information: We collect information about your interactions with our website, including the pages you visit, the links you click, and the duration of your visit. This information helps us improve our services and user experience.</p>
                            <p><b>2. HOW WE USE YOUR INFORMATION</b></p>
                            <p> a. Property Services: We use your personal information to provide property dealing services, including facilitating communication between buyers and sellers.</p>
                            <p>b. Communication: We may use your contact information to respond to inquiries, send updates about our services, and provide relevant information.</p>
                            <p>c. Analytics: We analyze usage data to understand how visitors use our website, improve content, and enhance user experience.</p>
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