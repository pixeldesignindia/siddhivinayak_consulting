'use client'
import React, { useEffect, useRef } from 'react';
import './about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import dynamic from 'next/dynamic';
// const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: false });
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap'; 
import Image from 'next/image';
import owner1 from '../../../public/images/owner1.jpg'
import owner2 from '../../../public/images/owner2.svg'
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
        <div ref={containerRef} className='over-hidden'>
            <ClosiongNav />
            <section class="gallery" data-scroll-section id="pin">
            <div className="row posotion-container" >
                <div className="col-8 about-left-content">
                    <div className='title'>About Us</div>
                    <div className='heading'>One of the leading financial consulting companies in Mumbai</div>
                    <div className='p-container'>
                        <p><b>Siddhi Vinayak Consulting </b> was founded in 2015 to provide start-ups and institutions with an online equity fundraising platform</p>
                        <p >We know that managing a business involves multiple tasks and responsibilities. If you are looking for a guide who will help you in managing your financial responsibilities so that you can concentrate on the growth of your business, then you are at the right place. We assist companies throughout their lifespan by helping them raise financing, offering mentorship, recruiting industry advisors, managing follow-on rounds, and identifying expansion opportunities. Private equity, corporate valuations, and debt management are some of our specialties. We support projects with a budget of Rs. 1 crore and invite applicants from all around India.</p>
                        <p >If you want to grow your business without any hassles then we are here to help you. Get in touch with us and we will find the best solution for you.</p>
                    </div>
                </div>
                <div className="col-4 about-img-c">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3"></div>
                </div>
                <div className="col-8 about-left-content">
                    <div data-scroll data-scroll-speed="5"><div className='title' >Mission Statement</div>
                    <span data-scroll >Assisting companies to raise the required capital</span></div>
                    <div data-scroll data-scroll-speed="5">
                    <div className='title' style={{marginTop:'2rem'}} >Values</div>
                    <span >Honesty – Strategic Thinking- Innovation</span>
                    </div>
                    <div className='p-container' >
                        <div className="blue-container row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                            <div className='col-3'> <Image src={owner1} height={170} width={170} className='ceo-img'/> </div>
                            <div className='col-8 blue-p' >
                                <h4>Manas Survee</h4>
                                <p>CEO of Siddhi Consulting</p>
                                <p>He has over 16 years of experience in Real Estate and Finance. The years have added to the expertise he has in the field. In his time of work, he has handled various large projects benefitting groups of people at the same time. Through this platform, he aims to facilitate the exchange of opportunities between investors and buyers of hospitals. He is a delight to work with and happens to be great at managing people and closing deals!</p>
                            </div>
                        </div>
                        {/* <div className="blue-container row disappear" data-scroll data-scroll-class="appear" data-scroll-direction="horizontal" data-scroll-speed="-3">
                            <div className='col-3'> <Image src={owner1} height={170} width={170} className='ceo-img'/> </div>
                            <div className='col-8 blue-p' >
                                <h4>Manas Survee</h4>
                                <p>CEO of Siddhi Consulting</p>
                                <p>He has over 16 years of experience in Real Estate and Finance. The years have added to the expertise he has in the field. In his time of work, he has handled various large projects benefitting groups of people at the same time. Through this platform, he aims to facilitate the exchange of opportunities between investors and buyers of hospitals. He is a delight to work with and happens to be great at managing people and closing deals!</p>
                            </div>
                        </div> */}
                        <div className="blue-container row disappear"  data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                            <div className='col-3'> <Image src={owner2} height={170} width={170}  className='ceo-img'/> </div>
                            <div className='col-8 blue-p'>
                                <h4>Sanjiv Swarup</h4>
                                <p>Management Consultant </p>
                                <p>The man with over 30 years of experience has been and is an important guiding factor for the company and its team. Educated in Law, Economics, Accounting, and Finance from reputed institutes, there is no gap that he can’t fill. His knowledge and wisdom are ever-evolving which enables the company to grow and achieve goals!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}

// Export the component
export default page;
