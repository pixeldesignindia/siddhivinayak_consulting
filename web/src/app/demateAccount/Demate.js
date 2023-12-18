'use client'
import React, { useEffect, useRef,useState } from 'react';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap'; 
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
                const fetchData = await client.fetch(`*[_type == "demate"] {
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
                <div className="col-8 about-left-content bg">
                    <div className='title'>International Demat Accounts</div>
                    <div className='heading top-heading'>{data && data.heading}</div>
                    <div className='p-container'>
                    {data && data.description && data.description.map((block, index) => (
      <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text } {block.children[2] && block.children[2].text }
      {block.children[3] && block.children[3].text }
      {block.children[4] && block.children[4].text }
      {block.children[5] && block.children[5].text }
      </p>

    ))}
                    </div>
                </div>
                <div className="col-4 about-img-c image-disappear">
                    <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
            backgroundImage: `url(${data && data.banner.url})`,
        }}></div>
                </div>
                <div className="col-7 about-left-content res-none">
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
            </div>
            <Footer/>
            </section>
        </div>
    );
}


export default page;