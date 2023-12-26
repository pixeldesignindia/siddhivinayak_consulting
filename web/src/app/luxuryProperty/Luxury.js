'use client'
import arrow from '../.../../../../public/images/property-arrow.svg'
import React, { useEffect, useRef, useState } from 'react';
import '../aboutUs/about.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
import './property.css'
import { useRouter } from 'next/navigation';
function page() {
    const router = useRouter();
    const containerRef = useRef(null);

    const [data, setData] = useState();
    const [propertyCard, setPropertyCard] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    const handleRoute = (slug) => {
        localStorage.setItem('slug', slug);
        router.push('/luxuryProperty/properties');
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
                setPropertyCard(data);
            })
            .catch(console.error);
    }, []);

    // Calculate total number of pages
    const totalPages = Math.ceil(propertyCard.length / cardsPerPage);

    // Slice property cards based on current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentPropertyCards = propertyCard.slice(indexOfFirstCard, indexOfLastCard);


    return (
        <div ref={containerRef}>
            <ClosiongNav />
            <section class="gallery" data-scroll-section >
                <div className="row posotion-container" id="pin">
                    <div className="col-8 about-left-content" style={{ paddingTop: '10rem' }}>
                        <div className='title'>Luxury Properties</div>
                        <div className='heading top-heading'>{data && data.heading}</div>
                        <div className='p-container bg row' >
                            {currentPropertyCards.map((item, index) => (
                                <div className='col-4 lux-property' onClick={() => handleRoute(item.slug.current)} key={index} style={{cursor:'pointer'}}>
                                    <div className="property-card" >
                                        <div className="image-property">
                                            <Image src={item.mainImage.asset.url} width={500} height={200} alt='image'/>
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="property-data">
                                        <h4>{item.title}</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laborum quam laudantium harum minus sunt molestias illo libero?</p>
                                        <div className='bot-red-property'> <p>View Details </p> <Image src={arrow} alt='arrow'/> </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination">
                            
                            <button className='center' onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                                Prev
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button className='center' onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="col-4 about-img-c image-disappear">
                        <div className="about-img" data-scroll data-scroll-sticky data-scroll-target="#pin" data-scroll-speed="3" style={{
                            backgroundImage: `url(${data && data.banner.url})`
                        }}></div>
                    </div>
                    <div className="col-7 about-left-content res-none">

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