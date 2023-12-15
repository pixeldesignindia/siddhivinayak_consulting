'use client'
import React, { useEffect, useRef , useState } from 'react';
import './about.css';
import Head from 'next/head';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import dynamic from 'next/dynamic';
import client from '../sanity/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import owner1 from '../../../public/images/owner1.jpg'
import link from '../../../public/images/linkdn.svg'
import owner2 from '../../../public/images/owner2.svg'
import Footer from '../components/footer/Footer';
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
        const aboutData = async () => {
            try {
                const about = await client.fetch(`*[_type == "about"] {
                    aboutHeading,
                    "aboutBanner": aboutBanner.asset->{
                        url
                    },
                    aboutDescription
                }`);
                console.log(about[0]);
                setData(about[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        aboutData();
    }, []);
    return (
        <div ref={containerRef} className='over-hidden'>
              <Head>
                <title>Your Page Title</title>
                <meta name="description" content="Description of your page" />
                {/* Add more meta tags as needed */}
            </Head>
            <ClosiongNav />
            <section class="gallery" data-scroll-section >
                <div id="pin">
                <div className="row posotion-container" >
                    <div className="col-8 about-left-content bg" style={{paddingBottom:'0'}}>
                        <div className='title'>About Us</div>
                        <div className='heading top-heading' >{data && data.aboutHeading}</div>
                        <div className='p-container'>
                        {data && data.aboutDescription && data.aboutDescription.map((block, index) => (
      <p key={index}>{block.children[0].text}</p>
    ))}
                        </div>
                    </div>
                    <div className="col-4 about-img-c image-disappear">
                        <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
            backgroundImage: `url(${data && data.aboutBanner.url})`,
          }}></div>
                    </div>
                    <div className="col-8 about-left-content bot-left p0 bg">
                        <div data-scroll ><div className='title' style={{marginTop:'1rem'}}>Mission Statement</div>
                            <span data-scroll >Assisting companies to raise the required capital</span></div>
                        <div data-scroll >
                            <div className='title' style={{ marginTop: '2rem' }} >Values</div>
                            <span >Honesty – Strategic Thinking- Innovation</span>
                        </div>
                        <div className='p-container' >
                            <div className="blue-container row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true" style={{ marginTop: '5rem' }}>
                                <div className='col-3'> <Image src={owner1} height={170} width={170} className='ceo-img' /> </div>
                                <div className='col-8 blue-p' >
                                    <div className='company-person'> <h6 >Manas Survee </h6><Image src={link} height={30} width={30}  /></div>
                                    
                                    <p className='position'>CEO of Siddhi Consulting</p>
                                    <p>He has over 16 years of experience in Real Estate and Finance. The years have added to the expertise he has in the field. In his time of work, he has handled various large projects benefitting groups of people at the same time. Through this platform, he aims to facilitate the exchange of opportunities between investors and buyers of hospitals. He is a delight to work with and happens to be great at managing people and closing deals!</p>
                                </div>
                            </div>
                            <div className="blue-container row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true" style={{marginTop:'2rem'}}>
                                <div className='col-3'> <Image src={owner2} height={170} width={170} className='ceo-img' /> </div>
                                <div className='col-8 blue-p'>
                                <div className='company-person'> <h6 >Sanjiv Swarup</h6><Image src={link} height={30} width={30}  /></div>
                                    <p className='position'>Management Consultant </p>
                                    <p>The man with over 30 years of experience has been and is an important guiding factor for the company and its team. Educated in Law, Economics, Accounting, and Finance from reputed institutes, there is no gap that he can’t fill. His knowledge and wisdom are ever-evolving which enables the company to grow and achieve goals!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
                
            </section>
            
        </div>
    );
}

export default page;
