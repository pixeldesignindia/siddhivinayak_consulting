'use client'
import React, { useEffect, useRef } from 'react';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
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
        <div ref={containerRef}>
            <ClosiongNav />
            <section class="gallery" data-scroll-section id="pin">
            <div className="row posotion-container" >
                <div className="col-6 about-left-content">
                    <div className='title'>International Demat Accounts</div>
                    <div className='heading'>Have you ever thought of investing in a foreign market?</div>
                    <div className='p-container'>
                        <p>Now is the best time to make your portfolio better by investing globally. Indian markets are witnessing volatility as an after-effect of the COVID-19 pandemic. Those who still haven’t invested in the foreign market are now looking for efficient ways to invest there. Moreover, the last-minute amendment to the Finance Bill 2023 which is the removal of the indexation benefit on the long-term capital gains of debt funds makes investing in the Indian market a more volatile one. Which is why it is the best time to invest overseas. Over the past few years, the portfolio investment outside India by Indian residents has increased manifold.</p>
                        <p>Investing overseas gives scope for investing in stocks such as Apple, Microsoft, Tesla, Amazon, and others and also helps in diversifying the portfolio.  Investing in overseas stocks is not very difficult as far as the setting up of an account is concerned. Many Indian brokers have tie-ups with overseas brokers and facilitate trading in overseas markets facilitating investing in international stocks through their various financial platforms.</p>
                        <p>So, if you want to build a diversified portfolio by investing globally then you are on the right page. Get in touch with us and we will help you in shaping your portfolio by investing overseas.</p>
                    </div>
                </div>
                <div className="col-6 about-img-c">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3"></div>
                </div>
                <div className="col-7 about-left-content">
                    {/* <div className='title'>Mission Statement</div>
                    <span>Assisting companies to raise the required capital</span>
                    <div className='title' style={{marginTop:'2rem'}}>Values</div>
                    <span>Honesty – Strategic Thinking- Innovation</span>
                    <div className='p-container'>
                        <div className="blue-container row">
                            <div className='col-3'> <Image src={owner1} height={170} width={170} className='ceo-img'/> </div>
                            <div className='col-8 blue-p'>
                                <h4>Manas Survee</h4>
                                <p>CEO of Siddhi Consulting</p>
                                <p>He has over 16 years of experience in Real Estate and Finance. The years have added to the expertise he has in the field. In his time of work, he has handled various large projects benefitting groups of people at the same time. Through this platform, he aims to facilitate the exchange of opportunities between investors and buyers of hospitals. He is a delight to work with and happens to be great at managing people and closing deals!</p>
                            </div>
                        </div>
                        <div className="blue-container row">
                            <div className='col-3'> <Image src={owner2} height={170} width={170}  className='ceo-img'/> </div>
                            <div className='col-8 blue-p'>
                                <h4>Sanjiv Swarup</h4>
                                <p>Management Consultant </p>
                                <p>The man with over 30 years of experience has been and is an important guiding factor for the company and its team. Educated in Law, Economics, Accounting, and Finance from reputed institutes, there is no gap that he can’t fill. His knowledge and wisdom are ever-evolving which enables the company to grow and achieve goals!</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div></section>
        </div>
    );
}


export default page;