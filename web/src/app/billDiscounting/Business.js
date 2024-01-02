'use client'
import React, { useEffect, useRef, useState } from 'react';
import InnerNav from '../components/Nav/InnerNav';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
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

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
  
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
  
        window.addEventListener("resize", handleResize);
  
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);
    return (
        <div ref={containerRef} className='page-content'>
            {windowWidth > 500 ? (<InnerNav/>) : (<ClosiongNav/>)}
            <section class="gallery" data-scroll-section >
            <div className="col-12 about-img-c ">
                        <div className="about-img center" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Bill Discounting</h1></div>
                    </div>
                <div className="row posotion-container" >
                    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
                        <div className='title'>Bill Discounting</div>
                        <div className='heading top-heading'>What is invoice discounting?</div>
                        <p>Invoice discounting is probably the simplest form of invoice finance. As with all types of invoice finance, with invoice discounting you sell unpaid invoices to a lender and they give you a cash advance that's a percentage of the invoice's value.</p>
                        
                        
                        <div className='p-container'>
                            {/* <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} alt='image'/> <p>You can optimize your cash flow</p> </div>
                            </div>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true" >
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} alt='image'/> <p>You can optimize your business payment cycles</p> </div>
                            </div>
                            <div className="row yellow-section-row disappear" data-scroll data-scroll-class="appear" data-scroll-repeat="true" >
                                <div className="col-10 yellow-section" style={{ marginLeft: '.5rem' }}><Image src={dot} alt='image'/> <p>Your balance sheets won't get disturbed</p> </div>
                            </div> */}
                           
                        <div className='heading '>Factoring</div>
                        <p>Factoring is a type of finance in which a business would sell its accounts receivable (invoices) to a third party to meet its short-term liquidity needs. Under the transaction between both parties, the factor would pay the amount due on the invoices minus its commission or fees.</p>
                        
                        <div className='heading '>What is Bill Discounting?</div>
                        <p>Bill discounting is the practice of using company's unpaid invoices to raise working capital for improved operational efficiency. Traditionally, financial institutions including banks and NBFCs have been discounting invoices for MSMEs. Bill discounting involves transfer of rights on an asset (invoice) from the seller (i.e. business) to the investor at an agreed value.</p>
                        <div className='heading '>What is the eligibility criteria for businesses?</div>
                        <p>Any business that supplies goods/services to large blue-chip companies can avail the bill discounting services provided by Dhumavati Consulting LLP. Eligibility and amount of discounting is governed by the creditworthiness of the business and therefore they should be willing to share their financial information and other related documents.</p>
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
            <Enquiry/>
        </div>
    );
}

// Export the component
export default page;
// 