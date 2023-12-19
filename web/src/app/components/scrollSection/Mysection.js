'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Mysection.css";
import { gsap } from 'gsap';
import MainNav from "../Nav/Nav";
import ClosiongNav from "../ClosingNav/ClosiongNav"; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import arr from '../../../../public/images/homeArrow.svg'
import { usePathname , useRouter } from 'next/navigation'
import HomeResNav from "../homeResNav/HomeResNav";
export default function Mysection({
  image,
  headline,
  scrollTo,
  goToSectionRef,
  showArrow,
  sectionIndex,
  totalSections,
}) {
  const router = useRouter()
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

  const headlineRef = useRef();
  const sectionRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: .5,
        y: -30,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 3,
        ease: "power3.out",
        marker:true,
        scrollTrigger: {
          scroller: ".sectionContainer",
          trigger: headlineRef.current,
          start: "top 70%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        autoAlpha: .5,
        scale:.8
      },
      {
        y: 0,
        autoAlpha: 1,
        scale:1,
        duration: 3,
        ease: "power3.out",
        marker:true,
        scrollTrigger: {
          scroller: ".sectionContainer",
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);

  function handleGoToNextSection() {
    const nextIndex = (sectionIndex + 1) % totalSections;
    scrollTo(goToSectionRef[nextIndex]);
  }

  function scrollToSection(section) {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      {windowWidth > 500 ? (
        <MainNav/>
      ) : (
        <HomeResNav/>
      )}
    
      <div className='section' ref={sectionRef}>
        
        <div className='copy' ref={headlineRef}>
          <h1 className="heading">{headline}</h1> 
          <button onClick={() => router.push('/fundRising')} > <div> EXPLORE NOW  </div> <div><Image src={arr} alt='image'/></div> </button>
        </div>
        
        <Image src={image} layout={`fill`} ref={imageRef} className="image-bg" alt='image'/>

        {showArrow && (
          <button
            className='downarrow'
            onClick={() => handleGoToNextSection()}
          ></button>
        )}
      </div>
    </>
  );
}
