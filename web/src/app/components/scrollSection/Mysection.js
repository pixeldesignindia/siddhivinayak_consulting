// Mysection.js
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./Mysection.css";
import { gsap } from 'gsap';
import MainNav from "../Nav/Nav";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Mysection({
  image,
  headline,
  scrollTo,
  goToSectionRef,
  showArrow,
  sectionIndex,
  totalSections,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -50,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 3,
        ease: "power3.out",
      }
    );

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: headlineRef.current,
      start: "top 0%",
      end: "bottom 0%",
      toggleActions: "play none restart reverse",
    });

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
    <div className='section' ref={sectionRef}>
      <MainNav ref={headlineRef} />
      <div className='copy'>
        <h1 className="heading">{headline}</h1> 
      </div>
      <Image src={image} layout={`fill`} />


      {showArrow && (
        <button
          className='downarrow'
          onClick={() => handleGoToNextSection()}
        ></button>
      )}
    </div>
  );
}
