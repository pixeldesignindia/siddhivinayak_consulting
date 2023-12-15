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
                <div className="row posotion-container" id="pin">
                    <div className="col-8 about-left-content bg" style={{ paddingTop: '10rem' }}>
                        <div className='title'>Business Insurance</div>
                        <div className='heading top-heading'>While you concentrate on your business, we take care of your insurance</div>
                        <p>Security in business is a crucial aspect and that security comes from insurance. We know that as an entrepreneur you are always juggling multiple responsibilities and activities to grow your business with a constant thought of getting secured. And here we come to guide you through the best process of getting your business secured.</p>
                        <p>Our team of experienced professionals who specialize in insurance will help you choose the best plan that will secure your business well. We are one of the most experienced firms.  We offer consulting and advisory services in professional indemnity insurance, directors liability insurance, and art insurance. If you are confused about choosing the plan that best suits you, then come to us, and we will help you choose the right insurance. Insurance is a subject matter of solicitation
                            Terms and conditions apply.</p>
                        <div className="heading disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">Art Insurance</div>
                        <p className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">An art collector, a museum, or in an art exhibition various valuable and priceless paintings, sculptures, and other antique collections are displayed. It is important to get insurance for these priceless collections as there are chances of damage like burglary, physical losses due to fire, and scratches are some of the most common risks to the artworks.</p>
                        <p className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">If any loss or damage happens to these artworks then the art insurance company provides compensation to the policyholder. The policy provides coverage for -</p>
                        <div className='p-container'>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} /> <p>Unforeseen and physical loss or damage</p> </div>
                            </div>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} /> <p>For all insured property during transit</p> </div>
                            </div>

                            <p className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">Some insurance companies also cover transportation of the art piece from one place to another within the country. They provide wall-to-wall coverage for paintings, designs, and other forms of artwork that can be displayed on a wall. Certain policies also include the storage of the artwork within the specified geographical or territorial limits for business or professional reasons. Damage or losses due to natural calamities like floods, earthquakes, cyclones, and other extreme weather conditions are also covered under Art Insurance.</p>
                            <p className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">Anyone who owns antique collections, priceless art pieces, musical instruments, sculptures, and statues should protect their masterpieces with art insurance. Any unforeseen damage might occur to these collections, maybe while displaying those in an exhibition or may be in some other way. So it is important to be prepared beforehand.</p>
                            <p className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">If you are interested to know more about art insurance then get in touch with us.</p>
                            {/* <div className="heading disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">{data && data.heading}</div>
                            <div className='disappear' data-scroll data-scroll-class="appear" data-scroll-repeat="true">{data && data.description && data.description.map((block, index) => (
                                <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text} {block.children[2] && block.children[2].text}
                                    {block.children[3] && block.children[3].text}
                                    {block.children[4] && block.children[4].text}
                                    {block.children[5] && block.children[5].text}
                                </p>
                            ))}</div> */}
                        </div>
                    </div>
                    <div className="col-4 about-img-c image-disappear">
                        <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}></div>
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