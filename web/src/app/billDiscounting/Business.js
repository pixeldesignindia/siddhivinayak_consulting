'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
gsap.registerPlugin(ScrollTrigger);

function page() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        let scroll;

        import('locomotive-scroll').then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: containerRef.current,
                smooth: true,
                direction: 'vertical',
            });

            return () => {
                if (scroll) {
                    scroll.destroy();
                }
            };
        });
    }, []);

    const [data, setData] = useState()
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "insurence"] {
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
            <div className="col-12 about-img-c ">
                        <div className="about-img center" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Bill Discounting</h1></div>
                    </div>
                <div className="row posotion-container" >
                    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
                        <div className='title'>Bill Discounting</div>
                        <div className='heading top-heading'>Clear your dues with short-term finance to run your business smoothly</div>
                        <p>Bill discounting is a short-term finance wherein you can sell unpaid invoices to financial institutions against a commission. Once you sell your bill to the bank before the due date, the bank credits the bill’s value after a discount charge to the customer’s account. The bank clears the due before the due date directly from the debtor.</p>
                        
                        
                        <div className='p-container'>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} alt='image'/> <p>You can optimize your cash flow</p> </div>
                            </div>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true" >
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} alt='image'/> <p>You can optimize your business payment cycles</p> </div>
                            </div>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true" >
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} alt='image'/> <p>Your balance sheets won't get disturbed</p> </div>
                            </div>
                            <p className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">If this is what you are looking for then we can guide you through this journey. We are one of the most experienced business funding consultants in Mumbai and have helped numerous businesses climb their ladder of success. To know more, get in touch with us.
</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}

// Export the component
export default page;
// 