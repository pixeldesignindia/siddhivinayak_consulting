'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState , useRef } from 'react';
import '../../aboutUs/about.css';
import './property.css'
import { useRouter } from 'next/navigation'
import ClosiongNav from '../../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import client from '../../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import { PortableText } from "@portabletext/react";
import Footer from '../../components/footer/Footer';
function page(props) {

  const containerRef = useRef(null);
  // const slug = props.params.slug
const slug =localStorage.getItem('slug')
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
    
    if (slug){
      const fetchData = async () => {
        try {
          const data = await client.fetch(`
        *[slug.current == "${slug}"] {
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
          "name":author -> name, 
        } 
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
  return (
    <div ref={containerRef}>
      <ClosiongNav />
      <div className='property-post-container'>
        <div className='propertyImageTop' style={{
                            backgroundImage: `url(${propertyData && propertyData.mainImage.asset.url})`
                        }}></div>
        <div className="property-content">
          <h2 className="property-heading">
          {propertyData && propertyData.title}
          </h2>
          <div className='property-Content-Box'>
<PortableText value={propertyData && propertyData.body}/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default page;