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
import office from '../../../public/images/boffice.svg'
import HomeResNav from '../components/homeResNav/HomeResNav'
import bmail from '../../../public/images/bmail.svg'
import mobile from '../../../public/images/bphone.svg'
import profile from '../../../public/images/bpro.svg'
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
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newData();
    }, []);

    return (
        <div ref={containerRef}>
            < HomeResNav/>
            <section class="gallery" data-scroll-section >
                <div className="row posotion-container" >
                    <div className="col-12 fund-page-content" style={{ paddingTop: '10rem' }}>
                        <h5 className='heading'>Fundraising</h5>
                        <h6 className='title ft'>List of Companies Looking for Private Equity</h6>
                        <div className="row fund-box-c">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 fund-img" style={{
                            backgroundImage: `url(${data && data.img1.url})`
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
                            backgroundImage: `url(${data && data.img2.url})`
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
                            backgroundImage: `url(${data && data.img3.url})`
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
                        <div className='call-back'>
<div className="call-top">
    <h3 className='heading'>REQUEST CALL BACK</h3>
    <Image src={line} alt='line'/>
    <p>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.</p>
</div>
<div className="form-bot">
<form className='row input-section' method='POST' action='https://formspree.io/f/mvoeppnz'>
                            <div class="input-fcontainer col-6">
                                <Image src={profile} alt='image'/>
                                <input type="text" placeholder='Name' name='userName' autoComplete='off' required/>
                            </div>
                            <div class="input-fcontainer col-6">
                                <Image src={bmail} alt='image'/>
                                <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required/>
                            </div>
                            <div class="input-fcontainer col-6" >
                                <Image src={mobile} alt='image'/>
                                <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required  />
                            </div>
                            <div class="input-fcontainer col-6" >
                                <Image src={office} alt='image'/>
                                <input type="text" placeholder='Message' name='message' autoComplete='off' required />
                            </div>
                            <input type="submit" value='SUBMIT' className='submit-btn' style={{marginTop:'3rem'}}/>
                            
                        </form>
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