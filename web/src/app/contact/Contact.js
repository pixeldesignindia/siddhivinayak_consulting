'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../aboutUs/about.css'
import './contact.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import office from '../../../public/images/office.svg'
import place from '../../../public/images/place.svg'
import mail from '../../../public/images/mail.svg'
import gmail from '../../../public/images/gmail.svg'
import mobile from '../../../public/images/mobile.svg'
import profile from '../../../public/images/profile.svg'
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
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
            <section class="gallery" data-scroll-section >
            <div className="row posotion-container" id="pin" >
                <div className="col-8 about-left-content bg" style={{ paddingTop: '10rem' }}>
                    <div className='title'>Contact Us</div>

                    <div className='p-container top-heading'>
                        <p>If you are looking to expand your business and financial consultation then you knocked on the right door! Get in touch with us and we will suggest you the best solution for your company.</p>
                        <p className='contact-data' style={{marginTop:'2rem'}}><Image src={place} />{data && data.address}</p>
                        <p className='contact-data'><Image src={mail} />{data && data.email}</p>
                        <form className='row input-section' method='POST' action='https://formspree.io/f/mvoeppnz'>
                            <div class="input-container col-6">
                                <Image src={profile} />
                                <input type="text" placeholder='Enter Name' name='userName' autoComplete='off' required/>
                            </div>
                            <div class="input-container col-6">
                                <Image src={gmail} />
                                <input type="email" placeholder='Enter Email' name='userEmail' autoComplete='off' required/>
                            </div>
                            <div class="input-container col-6" >
                                <Image src={mobile} />
                                <input type="text" placeholder='Enter Phone No' name='phoneNumber' autoComplete='off' required  />
                            </div>
                            <div class="input-container col-6" >
                                <Image src={office} />
                                <input type="text" placeholder='Enter Message' name='message' autoComplete='off' required />
                            </div>
                            <input type="submit" value='SUBMIT' className='submit-btn' style={{marginTop:'3rem'}}/>
                            {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
                        </form>
                    </div>
                </div>
                <div className="col-4 about-img-c image-disappear">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}></div>
                </div>
                <div className="col-7 about-left-content">
                </div>
            </div>
            <Footer/>
            </section>
        </div>
    );
}

export default page;