'use client'
import InnerNav from '@/app/components/Nav/InnerNav';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PortableText } from "@portabletext/react";
import '../../aboutUs/about.css';
import '../property.css'
import ClosiongNav from '../../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import client from '../../sanity/client';

gsap.registerPlugin(ScrollTrigger);
import Footer from '../../components/footer/Footer';

function page(props) {
  const [modalShow, setModalShow] = useState(false);
  const containerRef = useRef(null);
  // const slug = props.params.slug
  const slug = typeof window !== 'undefined' ? localStorage.getItem('news') : null;
  const [propertyData, setPropertyData] = useState(null);
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
    if (slug) {
      const fetchData = async () => {
        try {
          const data = await client.fetch(`
        *[slug.current == "${slug}"] {
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
            date}
      `);
          console.log(data[0]);
          setPropertyData(data[0]);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [slug]);
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
    <div ref={containerRef} style={{ position: 'relative' }}>
      {windowWidth > 500 ? (<InnerNav/>) : (<ClosiongNav/>)}
      <section class="gallery" data-scroll-section >
        <div className='property-post-container'>
          {propertyData && propertyData.news && 
          <div className="news-content">
            <div className='news-img center'> <Image src={propertyData && propertyData.mainImage && propertyData.mainImage.asset && propertyData.mainImage.asset.url} width={700} height={500}/> </div>
            <h2 className="news-heading">
              {propertyData && propertyData.title}
            </h2>
            <div className='row'><p className='col-6 t-left ' >Publish By : {propertyData && propertyData.publishBy}</p> <p className='col-6 t-right' >Date : {propertyData && propertyData.date}</p> </div>
            <div className='property-Conten' >
              <PortableText value={propertyData && propertyData.news} />
            </div>
          </div>}
        </div>
        <Footer />
      </section>
      <div></div>
    </div>
  );
}


export default page;