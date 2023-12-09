'use client'
import React, { useEffect, useRef } from 'react';
import dot from '../../../public/images/dot.svg'
import '../aboutUs/about.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap'; 
import Image from 'next/image';
import chart from '../../../public/images/chart.svg'

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


    return (
        <div ref={containerRef}>
            <ClosiongNav />
            <section className="gallery" data-scroll-section id="pin">
            <div className="row posotion-container" >
            <div className="col-8 about-left-content" style={{paddingTop:'10rem'}}>
                    <div className='title'>Private Equity</div>
                    <div className='heading'>Strategies of Private Equity.</div>
                    <div className='p-container'>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Angel investing</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Venture capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Leveraged buyouts (LBO)</p> </div>
                        </div>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Growth capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Distressed investments</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Mezzanine capita</p> </div>
                        </div>
                        <div className='heading' style={{margin:"6rem 0 2rem 0"}}>Who invests in Private Equity?</div>
                    <p>Majority of the private equity comes from the Pensioners and contributes a larger part to the asset.The below pie-chart gives a clear picture about various investors of Private Equity.</p>
                    </div>
                </div>
                <div className="col-4 about-img-c">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3"></div>
                </div>
                <div className="col-7 about-left-content p0">
                    <div className='heading disappear' style={{margin:'2rem 0'}} data-scroll data-scroll-class="appear" data-scroll-repeat="true">Investors of Private Equity</div>
                    <Image src={chart} width={650} data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear'/>
                    <div className='heading disappear' style={{margin:'2rem 0'}} data-scroll data-scroll-class="appear" data-scroll-repeat="true">Private Equity PAN India</div>
                    <p data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear'>Looking for expert Private Equity assistance? Siddhi Vinayak Consulting is your trusted partner. We offer comprehensive support to businesses throughout their journey. From fundraising and mentorship to strategic advisory, we excel in every aspect. Our specialized team manages portfolio companies, identifies growth opportunities, and ensures optimal financial outcomes. Whether you’re a startup or an established firm, our tailored solutions cater to your unique needs. Experience the power of Private Equity in Mumbai, Pune, India with us, and take your business to new heights. Partner with Siddhi Vinayak Consulting for unparalleled expertise and success.</p>
                </div>
            </div></section>
        </div>
    );
}

// Export the component
export default page;
// 