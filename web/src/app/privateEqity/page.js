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
            <section className="gallery" data-scroll-section id="pin">
            <div className="row posotion-container" >
            <div className="col-8 about-left-content" style={{paddingTop:'10rem'}}>
                    <div className='title'>Private Equity</div>
                    <div className='heading'>Strategies of Private Equity.</div>
                    <div className='p-container'>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Angel investing</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Venture capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Leveraged buyouts (LBO)</p> </div>
                        </div>
                        <div className="row yellow-section-row">
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Growth capital</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Distressed investments</p> </div>
                            <div className="col-4 yellow-section"><Image src={dot}/> <p>Mezzanine capita</p> </div>
                        </div>
                        <div className='heading' style={{margin:"6rem 0 2rem 0"}}>Who invests in Private Equity?</div>
                    <p>Majority of the private equity comes from the Pensioners and contributes a larger part to the asset.The below pie-chart gives a clear picture about various investors of Private Equity.</p>
                    </div>
                </div>
                <div className="col-4 about-img-c">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
            backgroundImage: `url(${data && data.equityBanner.url})`,
          }}></div>
                </div>
                <div className="col-7 about-left-content p0">
                    <div className='heading disappear' style={{margin:'2rem 0'}} data-scroll data-scroll-class="appear" data-scroll-repeat="true">Investors of Private Equity</div>
                    <Image src={data && data.chart.url} width={650} height={400} data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear'/>
                    <div className='heading disappear' style={{margin:'2rem 0'}} data-scroll data-scroll-class="appear" data-scroll-repeat="true">{data && data.equityHeading}</div>
                    <p data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear'>{data && data.equityDescription && data.equityDescription.map((block, index) => (
      <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text }
      </p>

    ))}</p>
                </div>
            </div></section>
        </div>
    );
}

export default page;