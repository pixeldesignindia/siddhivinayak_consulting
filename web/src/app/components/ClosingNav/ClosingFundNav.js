'use client'
import React,{useState, useEffect} from 'react'
import './ClosingNav.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/redLogo.svg';
import Menuline from '../../../../public/images/Menuline.svg';
import blackMenuline from '../../../../public/images/blackMenu.svg';
import closeBtn from '../../../../public/images/close-btn.svg';
import Modal from 'react-bootstrap/Modal';
import { usePathname , useRouter } from 'next/navigation'
function ClosingFundNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [show, setShow] = useState(false);
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
        <div className='closing-Nav'>
            <div className="closing-nav-container">
                <div className="row">
                    <div className="col-2 logo-container" onClick={()=>{router.push('/')}} style={{padding:'0'}}><Image src={logo} height={70} width={200} className='nav-logo f-logo' style={{cursor:'pointer'}} alt='logo'/></div>
                    <div className="col-10 menu-btn" onClick={()=>{setShow(true);}} >
        <Image src={blackMenuline} style={{cursor:'pointer'}} className='menu-btn-res' alt='image'/>
                    </div>
                </div>
            </div>
            <Modal show={show} fullscreen={true} onHide={() =>setShow(false)} className='fade-modal'>
                <Modal.Body closeButton>
                    <div className='modal-Close' onClick={() =>setShow(false)} style={{cursor:'pointer'}}> <Image src={closeBtn} alt='image'/> </div>
                    <div className="horizontal-nav-container" >
                    <Link className={`link d-flex align-items-center ${pathname === '/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/" onClick={() =>setShow(false)}>HOME</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/aboutUs/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/aboutUs" onClick={() =>setShow(false)}>ABOUT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/privateEqity/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/privateEqity" onClick={() =>setShow(false)}>PRIVATE EQUITY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/demateAccount/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/demateAccount" onClick={() =>setShow(false)}>DEMATE ACCOUNT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/dubaiProperty/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/dubaiProperty" onClick={() =>setShow(false)}>DUBAI PROPERTY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/billDiscounting/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/billDiscounting" onClick={() =>setShow(false)}>BILL DISCOUNTING</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/contact/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/contact" onClick={() =>setShow(false)}>CONTACT US</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ClosingFundNav
