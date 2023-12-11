'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg'
import mail from '../../../public/images/email.svg'
import line from '../../../public/images/line.svg'
import '../aboutUs/about.css'
import './fund.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import client from '../sanity/client';
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
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "luxurious"] {
                    heading,
                    "banner": banner.asset->{
                        url
                    },
                    description
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
                <div className="row posotion-container" >
                    <div className="col-12 fund-page-content" style={{ paddingTop: '10rem' }}>
                        <h5 className='heading'>Fundraising</h5>
                        <h6 className='title ft'>List of Companies Looking for Private Equity</h6>
                        <div className="row fund-box-c">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 fund-img">
                                </div>
                                <div className="col-12 fund-box-content">
                                    <h6 className='box-head'>Sector Power Plant Maintenance</h6>
                                    <h6 className='title'>Company looking to raise Rs. 5 cr</h6>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>willing to dilute below 5% stake</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Last year’s turnover Rs. 15 cr</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Unique id SERVICE0001</p>
                                    </div>
                                    <div className='fund-mail'>
                                        <p>For details email us</p>
                                        <Image src={mail} alt='dot' width={20} height={20}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 fund-img">
                                </div>
                                <div className="col-12 fund-box-content">
                                    <h6 className='box-head'>Sector Power Plant Maintenance</h6>
                                    <h6 className='title'>Company looking to raise Rs. 5 cr</h6>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>willing to dilute below 5% stake</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Last year’s turnover Rs. 15 cr</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Unique id SERVICE0001</p>
                                    </div>
                                    <div className='fund-mail'>
                                        <p>For details email us</p>
                                        <Image src={mail} alt='dot' width={20} height={20}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 fund-img">
                                </div>
                                <div className="col-12 fund-box-content">
                                    <h6 className='box-head'>Sector Power Plant Maintenance</h6>
                                    <h6 className='title'>Company looking to raise Rs. 5 cr</h6>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>willing to dilute below 5% stake</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Last year’s turnover Rs. 15 cr</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Unique id SERVICE0001</p>
                                    </div>
                                    <div className='fund-mail'>
                                        <p>For details email us</p>
                                        <Image src={mail} alt='dot' width={20} height={20}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className="fund-blue-section">
                        <div className="blue-section-sm">
                        <h3>Our Philosophy</h3>
                        <p>We believe that a consulting firm should be more than an advisor. Our approach and recommendations are highly customized. We help clients decide where they want to go and how to get there. We assure those decision get translated quickly into action.</p>
                        <p>We specialize in diverse financial consulting and advisory services. We are committed to helping our clients towards Growth Trajectory.</p>
                        <p>Unlock growth potential with Siddhi Vinayak Consulting’s expert solutions in Private Equity and Builder Loans. As a leading consultancy, we specialize in facilitating funding for <span className='fund-link'>unlisted shares in India</span>  and providing seamless startup funding opportunities. Our wide network of freelance channel partners enables us to connect businesses with the right investors, ensuring success at every step.</p>
                        </div>
                        <div className="row fund-box-c fund-bot-links">
                            <div className="col-4"> <p>Dealing With Art</p> <h4>Siddhiart.in</h4> </div>
                            <div className="col-4"><p>Buying & Selling of Hospital Simplified</p> <h4>Hospitalsforsale.biz</h4> </div>
                            <div className="col-4"><p>Dealing With Hotels</p> <h4>Hotelsforsale.com</h4> </div>
                        </div>
                        <div className='call-back'>
<div className="call-top">
    <h3 className='heading'>REQUEST CALL BACK</h3>
    <Image src={line} alt='line'/>
    <p>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.</p>
</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
            
        </div>
    );
}

// Export the component
export default page;
// 