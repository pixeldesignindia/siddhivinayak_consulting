'use client'
import office from '../../../../public/images/office.svg'
import gmail from '../../../../public/images/gmail.svg'
import mobile from '../../../../public/images/mobile.svg'
import profile from '../../../../public/images/profile.svg'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
    <div ref={containerRef} style={{position:'relative'}}>
      <ClosiongNav />
      <section class="gallery" data-scroll-section >
      <div className='property-post-container'>
        <div className='propertyImageTop' style={{
          backgroundImage: `url(${propertyData && propertyData.mainImage.asset.url})`
        }}>
          <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">{propertyData && propertyData.title}</h1>
        </div>
        
        <div className="property-content">
          <h2 className="property-heading">
            {propertyData && propertyData.title}
          </h2>
          <div className='property-Content-Box' data-scroll data-scroll-speed="1.2" data-scroll-repeat="true">
            <PortableText value={propertyData && propertyData.address} />
          </div>
        </div>
        
        <div className="property-content">
          <h2 className="property-heading">
            PROJECT - CONFIGURATION
          </h2>
          <div className='property-Content-Box'>
            <table class="table table-bordered area-table" data-scroll data-scroll-speed="1.2" data-scroll-repeat="true">
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
                    <td > <div className='btn-price'><button onClick={()=>{setModalShow(true)}}>Click To Know</button></div>  </td>
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
            <h3 style={{textAlign:'center'}}>EXPRESS YOUR INTEREST</h3>
            <h6 style={{marginTop:'1.2rem',textAlign:'center'}}>Please fill the form to know more</h6>
            <div className="row">
            <div className='input-contact-property col-6' >
                <Image src={profile} width={35} height={20} alt='image'/>
                <input type="text" placeholder='Name' name='userName' autoComplete='off' required />
              </div>
              <div className='input-contact-property col-6'>
              <Image src={gmail} width={35} height={16} alt='image' className='mail-height'/>
              <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required />
              </div>
              <div className='input-contact-property col-6'>
              <Image src={mobile} width={35} height={20} alt='image'/>
              <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required />
              </div>
              <div className='input-contact-property col-6'>
              <Image src={office} width={35} height={20} alt='image'/>
              <input type="text" placeholder='Message' name='message' autoComplete='off' required />
              </div>
            </div>
              <div className='in-btn'><input style={{marginTop:'1.5rem'}} type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' /></div>
              
              {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
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
        <div className="col-6 center res-none bg-c" >
          <h3 >Contact</h3> 
          <h6>Email Us </h6>
          <p>sales@siddhiconsulting.in</p>
          <h6>Address </h6>
          <p>Shop No 2, Agar Bazar, Dadar West, Mumbai</p>
            </div>
        <div className="col-6 center">
          <div className="property-contact-form">
            <form className='input-section-property' method='POST' action='https://formspree.io/f/mvoeppnz'>
              <div className='input-contact-property'>
                <Image src={profile} width={35} height={20} alt='image'/>
                <input type="text" placeholder='Name' name='userName' autoComplete='off' required />
              </div>
              <div className='input-contact-property'>
              <Image src={gmail} width={35} height={16} alt='image' className='mail-height'/>
              <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required />
              </div>
              <div className='input-contact-property'>
              <Image src={mobile} width={35} height={20} alt='image'/>
              <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required />
              </div>
              <div className='input-contact-property'>
              <Image src={office} width={35} height={20} alt='image'/>
              <input type="text" placeholder='Message' name='message' autoComplete='off' required />
              </div>
              <input style={{marginTop:'1.2rem'}} type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' />
              {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
      </section>
      <div><button className='enquery res-none' onClick={()=>{setModalShow(true)}}>Enquiry Now</button></div>
    </div>
  );
}


export default page;