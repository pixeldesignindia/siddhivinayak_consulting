'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg'
import '../aboutUs/about.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap'; 
import Image from 'next/image';
import chart from '../../../public/images/chart.svg'
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';

import mail from '../../../public/images/email.svg'
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
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "equity"] {
                    equityHeading,
                    "equityBanner": equityBanner.asset->{
                        url
                    },
                    "chart": chart.asset->{
                        url
                    },
                    equityDescription
                }`);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newData();
    }, []);
    const [dataa, setdataa] = useState()
    useEffect(() => {
        const newdata = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "fund"] {
                    "img1": img1.asset->{
                        url
                    },
                    "img2": img2.asset->{
                        url
                    },
                    "img3": img3.asset->{
                        url
                    },
                    philosophy
                }`);
                setdataa(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newdata();
    }, []);
    return (
        <div ref={containerRef} className='page-content'>
            <ClosiongNav />
            <section className="gallery" data-scroll-section >
            <div className="col-12 about-img-c">
                    <div className="about-img center"  style={{
            backgroundImage: `url(${data && data.equityBanner.url})`,
        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Private Equity</h1></div>
                </div>
                <div className="row posotion-container" >
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>
                    <div className='title'>Private Equity</div>
                        <h6 className='heading ft'>List of Companies Looking for Private Equity</h6>
                        <div className="row fund-box-c">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 fund-img" style={{
                            backgroundImage: `url(${dataa && dataa.img1.url})`
                        }}>
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
                                        <p>For details email us </p>
                                        <Image src={mail} alt='dot' width={20} height={20}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 fund-img" style={{
                            backgroundImage: `url(${dataa && dataa.img2.url})`
                        }}>
                                </div>
                                <div className="col-12 fund-box-content ">
                                    <h6 className='box-head'>Sector Edtech</h6>
                                    <h6 className='title'>Company looking to raise Rs. 6 CR</h6>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Last year’s turnover Rs. pre-revenue</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>willing to dilute 13% stake</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Unique id EDTECH0003</p>
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
                                <div className="col-12 fund-img" style={{
                            backgroundImage: `url(${dataa && dataa.img3.url})`
                        }}>
                                </div>
                                <div className="col-12 fund-box-content">
                                    <h6 className='box-head'>Sector Tour Operators</h6>
                                    <h6 className='title'>Company looking to raise Rs. 2 CR</h6>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Willing to dilute 10%</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Last year turnover 3.5 Cr</p>
                                    </div>
                                    <div className='fund-point'>
                                        <Image src={dot} alt='dot' width={5} height={5}/>
                                        <p>Code: TRAVEL001</p>
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
                        <div className="blue-section-sm bg">
                        <h3>Our Philosophy</h3>

                        {data && data.philosophy && data.philosophy.map((block, index) => (
                                <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text} {block.children[2] && block.children[2].text}
                                    {block.children[3] && block.children[3].text}
                                    {block.children[4] && block.children[4].text}
                                    {block.children[5] && block.children[5].text}
                                </p>
                            ))}
                        <p>Unlock growth potential with Siddhi Vinayak Consulting’s expert solutions in Private Equity and Builder Loans. As a leading consultancy, we specialize in facilitating funding for <span className='fund-link'>unlisted shares in India</span>  and providing seamless startup funding opportunities. Our wide network of freelance channel partners enables us to connect businesses with the right investors, ensuring success at every step.</p>
                        </div>
                        <div className="row fund-box-c fund-bot-links">
                            <div className="col-4"> <p>Dealing With Art</p> <h4>Siddhiart.in</h4> </div>
                            <div className="col-4"><p>Buying & Selling of Hospital Simplified</p> <h4>Hospitalsforsale.biz</h4> </div>
                            <div className="col-4"><p>Dealing With Hotels</p> <h4>Hotelsforsale.com</h4> </div>
                        </div>

                    </div>

                </div>
            <div className="row posotion-container" >
            <div className="col-12 about-left-content bg" style={{paddingTop:'5rem'}}>
                    
                    <div className='heading top-heading'>Strategies of Private Equity.</div>
                    <div className='p-container'>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Angel investing</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Venture capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Leveraged buyouts (LBO)</p> </div>
                        </div>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section res-m-t"><Image src={dot} alt='image'/> <p>Growth capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Distressed investments</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Mezzanine capita</p> </div>
                        </div>
                        <div className='heading' style={{margin:"4rem 0 1rem 0"}}>Who invests in Private Equity?</div>
                    <p>Majority of the private equity comes from the Pensioners and contributes a larger part to the asset.The below pie-chart gives a clear picture about various investors of Private Equity.</p>
                    </div>
                </div>
                <div className="col-12 about-left-content p0 bot-left">
                    <div className='heading disappear' style={{margin:' 0 0 2rem 0'}} data-scroll data-scroll-class="appear" >Investors of Private Equity</div>
                    <Image src={data && data.chart.url} width={650} height={400} data-scroll  data-scroll-repeat="true" className='disappear private-chart' alt='image'/>
                    <div className='heading disappear' style={{margin:'3rem 0 1rem 0'}} data-scroll  >{data && data.equityHeading}</div>
                    <p data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear' style={{marginBottom:'3rem'}}>{data && data.equityDescription && data.equityDescription.map((block, index) => (
    <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text }
    </p>
    ))}</p>
                </div>
            </div>
            <Footer/>
            </section>
            <Enquiry/>
        </div>
    );
}

export default page;