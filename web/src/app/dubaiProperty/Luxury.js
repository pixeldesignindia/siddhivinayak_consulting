'use client'
import arrow from '../.../../../../public/images/property-arrow.svg'
import React, { useEffect, useRef, useState } from 'react';
import '../aboutUs/about.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import Enquiry from '../components/Enquiry/Enquiry';
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
import './property.css'
import { useRouter } from 'next/navigation';
import { PortableText } from "@portabletext/react";
import InnerNav from '../components/Nav/InnerNav';
function page() {
    const router = useRouter();
    const containerRef = useRef(null);

    const [data, setData] = useState();
    const [propertyCard, setPropertyCard] = useState([]);
    const [newsCard, setNewsCard] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    const handleRoute = (slug) => {
        localStorage.setItem('slug', slug);
        router.push('/dubaiProperty/properties');
    };
    const handleNews = (slug) => {
        localStorage.setItem('news', slug);
        router.push('/dubaiProperty/newses');
    };
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
        const fetchData = async () => {
            try {
                const luxuriousData = await client.fetch(`*[_type == "luxurious"] {
            heading,
            "banner": banner.asset->{
                url
            },
            description
        }`);
                setData(luxuriousData[0]);
                console.log(luxuriousData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        client
            .fetch(`
              *[_type == "post"] {
                title,
                slug,
                description,
                body,
                mainImage {
                  asset -> {
                    _id,
                    url
                  },
                  alt,
                },
              }
            `)
            .then((data) => {
                const filteredData = data.filter((item) => item.title);
                setPropertyCard(filteredData);
            })
            .catch(console.error);
    }, []);
    useEffect(() => {
        client
            .fetch(`
              *[_type == "newses"] {
                title,
                slug,

                news,
                mainImage {
                  asset -> {
                    _id,
                    url
                  },
                  alt,
                },
                publishBy,
                date
              }
            `)
            .then((data) => {

                console.log(data);
                setNewsCard(data);
            })
            .catch(console.error);
    }, []);



    const totalPages = Math.ceil(propertyCard.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentPropertyCards = propertyCard.slice(indexOfFirstCard, indexOfLastCard);
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
            {windowWidth > 500 ? (<InnerNav />) : (<ClosiongNav />)}
            <section class="gallery" data-scroll-section >
                <div className="col-12 about-img-c ">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${data && data.banner.url})`
                    }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Dubai Properties</h1></div>
                </div>
                <div className="row posotion-container">
                    <div className="col-12 about-left-content res-100" style={{ paddingTop: '5rem' }}>
                        <div className='title'>Dubai Properties</div>
                        <div className='heading top-heading'>{data && data.heading}</div>
                        <div className="dubai-content">
                            <PortableText value={data && data.description} />
                        </div>
                        <div className='p-container bg row' >
                            {currentPropertyCards.map((item, index) => (
                                <div className='col-3 lux-property' onClick={() => handleRoute(item.slug.current)} key={index} style={{ cursor: 'pointer' }}>
                                    <div className="property-card" >
                                        <div className="image-property">
                                            {item.mainImage && <Image src={item.mainImage.asset.url} width={500} height={200} alt='image' />}

                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="property-data">
                                        <h4>{item.title}</h4>
                                        {item.description && 
                                        <p className='p-data'>{item.description.length > 70 ? `${item.description.substring(0, 100)}...` : item.description}</p>}
                                        <div className='bot-red-property'>
                                            <p>View Details</p>
                                            <Image src={arrow} alt='arrow' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="pagination">
                            <button className='center' onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                                Prev
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button className='center' onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div> */}
                        <div className='p-container bg row m-t-2' >
                            <div className="heading">Latest News</div>
                            {newsCard && newsCard.map((item, index) => (
                                <div className='col-3 lux-property' onClick={() => handleNews(item.slug.current)} key={index} style={{ cursor: 'pointer' }}>
                                    <div className="property-card" >
                                        <div className="image-property">
                                            {item.mainImage && <Image src={item.mainImage.asset.url} width={500} height={200} alt='image' />}

                                        </div>
                                    </div>
                                    <div className="property-data">
                                        <div className='property-data-inner newsData'>

                                            <div className='news-name'><h5>{item.title.length > 20 ? `${item.title.substring(0, 45)}...` : item.title}</h5></div>

                                            <p className='ash'>Publish by: {item.publishBy}</p>
                                            <p>Date: {item.date}</p>
                                        </div>

                                        <div className='bot-red-property'> <p>View Details </p> <Image src={arrow} alt='arrow' /> </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <Footer />
            </section>
            <Enquiry />
        </div>
    );
}

// Export the component
export default page;
// 