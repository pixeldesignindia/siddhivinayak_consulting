'use client'
import office from '../../../../public/images/office.svg'
import gmail from '../../../../public/images/gmail.svg'
import mobile from '../../../../public/images/mobile.svg'
import profile from '../../../../public/images/profile.svg'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PortableText } from "@portabletext/react";
import '../../aboutUs/about.css';
import './property.css'
import ClosiongNav from '../../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import client from '../../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../../components/footer/Footer';
function page(props) {

  const containerRef = useRef(null);
  // const slug = props.params.slug
  const slug = typeof window !== 'undefined' ? localStorage.getItem('slug') : null;
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
          configuration,
          body,
          address,
          facilities,
          videoUrl,
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
        }}>
          <h1>{propertyData && propertyData.title}</h1>
        </div>
        <div className="property-content bg">
          <h2 className="property-heading">
            {propertyData && propertyData.title}
          </h2>
          <div className='property-Content-Box'>
            <PortableText value={propertyData && propertyData.address} />
          </div>
        </div>
        <div className="property-content">
          <h2 className="property-heading">
            PROJECT - CONFIGURATION
          </h2>
          <div className='property-Content-Box'>
            <table class="table table-bordered area-table">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Carpet Area sqft</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {propertyData && propertyData.configuration && propertyData.configuration.map((item, i) => (
                  <tr key={i}>
                    <td>{item.type}</td>
                    <td>{item.area}</td>
                    <td > <div className='btn-price'><button>Click To Know</button></div>  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="property-content">
          <h2 className="property-heading">
            PROJECT AMENITIES
          </h2>
          <div className='property-Content-Box'>
            <div className="row">
              {propertyData && propertyData.facilities && propertyData.facilities.map((itemf, i) => (
                <div key={i} className='facility-box col-md-3 col-xs-6 col-sm-6'>
                  <div className="facility"><h5 style={{ fontWeight: '600' }}>{itemf}</h5> </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="property-content">
          <h2 className="property-heading">
            EXPERIENCE THE WALKTHROUGH
          </h2>
          <div className='property-Content-Box'>
            <div className="row">
              <iframe width="70vw" height="600" src={propertyData && propertyData.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='iframeContainer'></iframe>
            </div>
          </div>
        </div>
        <div className="property-about-content">
          <h2 className="property-heading">
            About
          </h2>
          <div className='property-Content-Box'>
            <PortableText value={propertyData && propertyData.body} />
          </div>
        </div>
      </div>
      <div className="row contact-row-property">
        <div className="col-6 center res-none" style={{ background: '#252525' }}> <h3 >Contact</h3>  </div>
        <div className="col-6 center">
          <div className="property-contact-form">
            <form className='input-section-property' method='POST' action='https://formspree.io/f/mvoeppnz'>
              <div className='input-contact-property'>
                <Image src={profile} width={35} height={20}/>
                <input type="text" placeholder='Name' name='userName' autoComplete='off' required />
              </div>
              <div className='input-contact-property'>
              <Image src={gmail} width={35} height={20}/>
              <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required />
              </div>
              <div className='input-contact-property'>
              <Image src={mobile} width={35} height={20}/>
              <input type="text" placeholder='Phone No' name='phoneNumber' autoComplete='off' required />
              </div>
              <div className='input-contact-property'>
              <Image src={office} width={35} height={20}/>
              <input type="text" placeholder='Message' name='message' autoComplete='off' required />
              </div>
              <input type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' />
              {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default page;