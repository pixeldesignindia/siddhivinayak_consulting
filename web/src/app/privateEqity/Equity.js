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
    return (
        <div ref={containerRef}>
            <ClosiongNav />
            <section className="gallery" data-scroll-section >
            <div className="row posotion-container" id="pin">
            <div className="col-8 about-left-content bg" style={{paddingTop:'10rem'}}>
                    <div className='title'>Private Equity</div>
                    <div className='heading top-heading'>Strategies of Private Equity.</div>
                    <div className='p-container'>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Angel investing</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Venture capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Leveraged buyouts (LBO)</p> </div>
                        </div>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Growth capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Distressed investments</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot} alt='image'/> <p>Mezzanine capita</p> </div>
                        </div>
                        <div className='heading' style={{margin:"4rem 0 1rem 0"}}>Who invests in Private Equity?</div>
                    <p>Majority of the private equity comes from the Pensioners and contributes a larger part to the asset.The below pie-chart gives a clear picture about various investors of Private Equity.</p>
                    </div>
                </div>
                <div className="col-4 about-img-c image-disappear">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
            backgroundImage: `url(${data && data.equityBanner.url})`,
        }}></div>
                </div>
                <div className="col-7 about-left-content p0 bot-left">
                    <div className='heading disappear' style={{margin:' 0 0 2rem 0'}} data-scroll data-scroll-class="appear" >Investors of Private Equity</div>
                    <Image src={data && data.chart.url} width={650} height={400} data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear private-chart' alt='image'/>
                    <div className='heading disappear' style={{margin:'3rem 0 1rem 0'}} data-scroll data-scroll-class="appear" >{data && data.equityHeading}</div>
                    <p data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear' style={{marginBottom:'5rem'}}>{data && data.equityDescription && data.equityDescription.map((block, index) => (
    <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text }
    </p>
    ))}</p>
                </div>
            </div>
            <Footer/>
            </section>
        </div>
    );
}

export default page;