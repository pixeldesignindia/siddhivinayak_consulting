'use client';
import { gsap } from "gsap";
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import MainNav from './components/Nav/Nav'
import Script from 'next/script'
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const bannerData = [
        { /* Add data properties if needed */ },
        { /* Add data properties if needed */ },
        { /* Add data properties if needed */ },
        { /* Add data properties if needed */ },
    ];

    const mainContainerRef = useRef(null);


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://rawgit.com/almeida-matheus/fullPageScrollPureJS/master/app/assets/javascript/full-page-scroll.js';
        script.async = true;

        script.onload = () => {
            new fullScroll({
                mainElement: 'main',
                displayDots: true,
                dotsPosition: 'right',
                animateTime: 0.7,
                animateFunction: 'ease',
            });
        };

        mainContainerRef.current.appendChild(script);

        return () => {
            script.onload = null;
            if (script.parentNode) {
                script.parentNode.removeChild(script);
                console.log('unmount');
            }
            
        };
    }, []);


    return (
        <>
        <MainNav />
        <div className="snap-container-main">
        <div ref={mainContainerRef} className='main-container  scroll-container' id="main">
            {bannerData.map((data, index) => (
                <section className={`section${index}`} key={index}>
                    <div className={`banner${index} fade-img`}>
                        <div>
                        </div>
                        <div className='left-section'>
                            <div className='third-right'>
                                <h1>{/*title goes here */}</h1>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
        </div>
        </>
    );
}
