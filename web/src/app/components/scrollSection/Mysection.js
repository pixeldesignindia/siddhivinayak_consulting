'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Mysection.css";
import { gsap } from 'gsap';
import MainNav from "../Nav/Nav";
import arrow from "../../../../public/images/arrow.svg"
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
  link,
  video
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
  const handleLink2Click = () => {
    window.open("https://hospitalsforsale.biz/", '_blank');
  };
  const handleLink3Click = () => {
    window.open("https://hotels4sale.co.in/", '_blank');
  };
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
          <button onClick={() => router.push(link)} > <div> EXPLORE NOW  </div> <div><Image src={arr} alt='image'/></div> </button>
        </div>
        <div className="row home-link-container">
          <div className="col-4"><div className="home-link" ><p>For Portraits</p><h5>Siddhiart.in</h5></div></div>
          <div className="col-4"><div className="home-link" onClick={handleLink2Click}><p>M & A in healthcare sector</p><h5>Hospitalsforsale.biz</h5></div></div>
          <div className="col-4"><div className="home-link" onClick={handleLink3Click}><p>M & A in hospitality sector</p><h5>Hotels4sale.co.in</h5></div></div>
        </div>
        {image &&<Image src={image} layout={`fill`} ref={imageRef} className="image-bg" alt='image'/>}
        {video && 
        <video autoPlay muted loop id="background-video" ref={imageRef} className="image-bg" >
        <source src={video} type="video/mp4" />

      </video>}
        {showArrow && (
          <button
            className='downarrow center'
            onClick={() => handleGoToNextSection()}
          > <Image src={arrow} alt="arrow" width={50} height={50}/> </button>
        )}
      </div>
    </>
  );
}
