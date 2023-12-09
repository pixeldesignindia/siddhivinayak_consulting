'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg'
import '../aboutUs/about.css'
import './contact.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import place from '../../../public/images/place.svg'
import mail from '../../../public/images/mail.svg'
import gmail from '../../../public/images/gmail.svg'
import profile from '../../../public/images/profile.svg'
import client from '../sanity/client';
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


    useEffect(() => {
        const pin = gsap.to(sectionRef.current, {
            y: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
        });

        return () => {
            pin.kill();
        };
    }, []);
    const [data, setData] = useState()
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "contact"] {
                    email,
                    "banner": banner.asset->{
                        url
                    },
                    address
                }`);
                console.log(fetchData[0]);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };

        newData();
    }, []);
    return (
        <div ref={containerRef}>
            <ClosiongNav />
            <section class="gallery" data-scroll-section id="pin">
            <div className="row posotion-container" >
                <div className="col-8 about-left-content" style={{ paddingTop: '10rem' }}>
                    <div className='title'>Contact Us</div>

                    <div className='p-container'>
                        <p>If you are looking to expand your business and financial consultation then you knocked on the right door! Get in touch with us and we will suggest you the best solution for your company.</p>
                        <p className='contact-data' style={{marginTop:'2rem'}}><Image src={place} />{data && data.address}</p>
                        <p className='contact-data'><Image src={mail} />{data && data.email}</p>
                        <form className='row input-section'>
                            <div class="input-container col-6">
                                <Image src={profile} />
                                <input type="text" placeholder='Enter Name'/>
                            </div>
                            <div class="input-container col-6">
                                <Image src={gmail} />
                                <input type="email" placeholder='Enter Email'/>
                            </div>
                            <div class="input-container col-6" >
                                <Image src={profile} />
                                <input type="text" placeholder='Enter Name'/>
                            </div>
                            <div class="input-container col-6" >
                                <Image src={gmail} />
                                <input type="email" placeholder='Enter Email'/>
                            </div>
                            <button type='submit' className='submit-btn' style={{marginTop:'3rem'}}>SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className="col-4 about-img-c">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}></div>
                </div>
                <div className="col-7 about-left-content">
                </div>
            </div></section>
        </div>
    );
}

// Export the component
export default page;
// 