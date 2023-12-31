'use client'
import office from '../../../../public/images/office.svg'
import gmail from '../../../../public/images/gmail.svg'
import mobile from '../../../../public/images/mobile.svg'
import profile from '../../../../public/images/profile.svg'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

import Modal from 'react-bootstrap/Modal';
import { PortableText } from "@portabletext/react";
import '../../aboutUs/about.css';
import './property.css'
import ClosiongNav from '../../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import client from '../../sanity/client';
import Accordion from 'react-bootstrap/Accordion';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../../components/footer/Footer';

function page(props) {
  const [modalShow, setModalShow] = useState(false);
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
          facilities[]{
            amenity,
            logo {
              asset->{url}
            }
          },
          near[]{
            nearText,
            near {
              asset->{url},
              
            }
          },
          imgages[]{
            img {
              asset->{url}
            }
          },
          videoUrl,
          FAQ,
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
    <div ref={containerRef} style={{ position: 'relative' }}>
      <ClosiongNav />
      <section class="gallery" data-scroll-section >
        <div className='property-post-container'>
          <div className='propertyImageTop' style={{
            backgroundImage: `url(${propertyData && propertyData.mainImage.asset.url})`
          }}>
            <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">{propertyData && propertyData.title}</h1>
          </div>
          {propertyData && propertyData.address && 
          <div className="property-content">
            <h2 className="property-heading">
              {propertyData && propertyData.title}
            </h2>
            <div className='property-Content-Box' >
              <PortableText value={propertyData && propertyData.address} />
            </div>
          </div>}
          {propertyData && propertyData.body &&
          <div className="property-about-content">
            <h2 className="property-heading">
              About
            </h2>
            <div className='property-Content-Box b-about'>
              <PortableText value={propertyData && propertyData.body} />
            </div>
          </div>}
          {propertyData && propertyData.configuration && propertyData.configuration.length!==0 &&
          <div className="property-content">
            <h2 className="property-heading">
              PROJECT - CONFIGURATION
            </h2>
            <div className='property-Content-Box center'>
              <table class="table table-bordered area-table" >
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Carpet Area</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {propertyData && propertyData.configuration && propertyData.configuration.map((item, i) => (
                    <tr key={i}>
                      <td>{item.type}</td>
                      <td>{item.area}</td>
                      <td onClick={() => { setModalShow(true) }}> <div className='btn-price'><div className='button' >Click To Know</div></div>  </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal
                className='contactModal'
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter center" >

                  </Modal.Title>
                </Modal.Header>
                <Modal.Body >

                  <div className=" center">

                    <div className="property-contact-form">
                      <form className='popup' method='POST' action='https://formspree.io/f/mvoeppnz'>
                        <h3 style={{ textAlign: 'center' }}>EXPRESS YOUR INTEREST</h3>
                        <h6 style={{ marginTop: '1.2rem', textAlign: 'center' }}>Please fill the form to know more</h6>
                        <div className="row">
                          <div className='input-contact-property col-6' >
                            <Image src={profile} width={35} height={20} alt='image' />
                            <input type="text" placeholder='Name' name='userName' autoComplete='off' required />
                          </div>
                          <div className='input-contact-property col-6'>
                            <Image src={gmail} width={35} height={16} alt='image' className='mail-height' />
                            <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required />
                          </div>
                          <div className='input-contact-property col-6'>
                            <Image src={mobile} width={35} height={20} alt='image' />
                            <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required />
                          </div>
                          <div className='input-contact-property col-6'>
                            <Image src={office} width={35} height={20} alt='image' />
                            <input type="text" placeholder='Message' name='message' autoComplete='off' required />
                          </div>
                        </div>
                        <div className='in-btn'><input style={{ marginTop: '1.5rem', }} type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' /></div>

                        {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
                      </form>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>}
          {propertyData && propertyData.facilities &&  propertyData.facilities.length !== 0 &&
          <div className="property-content">
            <h2 className="property-heading">
              PROJECT AMENITIES
            </h2>
            <div className='property-Content-Box center'>
              <div className="row">
                {propertyData && propertyData.facilities && propertyData.facilities.map((itemf, i) => (
                  <div key={i} className='facility-box col-3 '>

                    <div className="facility"> {itemf && itemf.logo && itemf.logo.asset && itemf.logo.asset.url && <Image src={itemf.logo.asset.url} width={50} height={50} />}  <h5 style={{ fontWeight: '600' }}>{itemf.amenity}</h5> </div>
                  </div>
                ))}
              </div>
            </div>
          </div>}
          {propertyData && propertyData.imgages && propertyData.imgages.length !==0 &&
          <div className="property-content">
            <h2 className="property-heading">
              DISCOVER "SIDDHIVINAYAK" LIVING
            </h2>
            <div className='property-Content-Box center'>

              <Carousel fade>
                {propertyData && propertyData.imgages && propertyData.imgages.map((itemf, i) => (
                  <Carousel.Item key={i} >

                    <div> {itemf.img.asset.url && <Image src={itemf.img.asset.url} width={1220} height={700} className='galleryImg'/>} </div>
                    
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>}
          {propertyData && propertyData.near && propertyData.near.length !==0 && 
          <div className="property-content near-by-content">
            <h2 className="property-heading" style={{color:"#fff"}}>
              NEAR BY
            </h2>
            <div className='property-Content-Box center'>

              <Carousel fade className='near-by'>
                {propertyData && propertyData.near && propertyData.near.map((itemf, i) => (
                  <Carousel.Item key={i} >

                    <div> {itemf.near.asset.url && <Image src={itemf.near.asset.url} width={1250} height={500} className='galleryImg'/>} <h4  style={{color:"#fff"}} className='text-center'>{itemf.nearText}</h4> </div>
                    
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>}
          {propertyData && propertyData.videoUrl &&
          <div className="property-content">
            <h2 className="property-heading">
              EXPERIENCE THE WALKTHROUGH
            </h2>
            <div className='property-Content-Box center'>
              <div className="row center">
                <iframe width="1500" height="600" src={propertyData && propertyData.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='iframeContainer'></iframe>
              </div>
            </div>
          </div>}
          {propertyData && propertyData.FAQ && propertyData.FAQ.length !==0 &&
          <div className="property-content">
            <h2 className="property-heading">
              FAQ
            </h2>
            <div className='property-Content-Box center'>
              <Accordion defaultActiveKey="0" className='acc'>
                {propertyData && propertyData.FAQ && propertyData.FAQ.map((itemf, i) => (
                  <Accordion.Item eventKey={i} key={i}>
                    <Accordion.Header>{itemf.question}</Accordion.Header>
                    <Accordion.Body>
                    {itemf.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>}
        </div>
        <div className="row contact-row-property" style={{ display: 'none' }}>
          <div className="col-6 center res-none bg-c" >
            <h3 >Contact</h3>
            <h6 className='e-t-m'>Email Us </h6>
            <p>sales@siddhiconsulting.in</p>
            <h6>Address </h6>
            <p>Shop No 2, Agar Bazar, Dadar West, Mumbai</p>
          </div>
          <div className="col-6 center">
            <div className="property-contact-form">
              <form className='popup' method='POST' action='https://formspree.io/f/mvoeppnz' style={{ padding: '0 1rem' }}>

                <div className="row bot-pro-con">
                  <div className='input-contact-property-bot col-6 ' >
                    <Image src={profile} width={35} height={20} alt='image' />
                    <input type="text" placeholder='Name' name='userName' autoComplete='off' required className='cI' />
                  </div>
                  <div className='input-contact-property-bot col-6'>
                    <Image src={gmail} width={35} height={16} alt='image' className='mail-height' />
                    <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required className='cI' />
                  </div>
                  <div className='input-contact-property-bot col-6'>
                    <Image src={mobile} width={35} height={20} alt='image' />
                    <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required className='cI' />
                  </div>
                  <div className='input-contact-property-bot col-6'>
                    <Image src={office} width={30} height={20} alt='image' className='mssg' />
                    <input type="text" placeholder='Message' name='message' autoComplete='off' required className='cI' />
                  </div>
                </div>
                <div className='in-btn'><input style={{ marginTop: '1.5rem', padding: '1rem' }} type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' /></div>

                {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
              </form>

            </div>
          </div>
        </div>
        <Footer />
      </section>
      <div><button className='enquery res-none' onClick={() => { setModalShow(true) }}>Enquiry Now</button></div>
    </div>
  );
}


export default page;