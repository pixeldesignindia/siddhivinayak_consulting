'use client'
import React,{useState, useEffect} from 'react'
import './ClosingNav.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';
import Menuline from '../../../../public/images/Menuline.svg';
import blackMenuline from '../../../../public/images/blackMenu.svg';
import closeBtn from '../../../../public/images/close-btn.svg';
import Modal from 'react-bootstrap/Modal';
import { usePathname , useRouter } from 'next/navigation'
function ClosiongNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < 500);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const menuImage = isSmallWindow ? blackMenuline : Menuline;
    return (
        <div className='closing-Nav'>
            <div className="closing-nav-container">
                <div className="row">
                    <div className="col-2" onClick={()=>{router.push('/')}} ><Image src={logo} height={88} width={256} className='nav-logo' style={{cursor:'pointer'}}/></div>
                    <div className="col-10 menu-btn" onClick={()=>{setShow(true);}} >
               
  <Image src={menuImage} style={{cursor:'pointer'}} className='menu-btn-res' alt='image'/>


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
            <Link className={`link d-flex align-items-center ${pathname === '/luxuryProperty/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/luxuryProperty" onClick={() =>setShow(false)}>LUXURY PROPERTY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/businessInsurance/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/businessInsurance" onClick={() =>setShow(false)}>BUSINESS INSURANCE</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/contact/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/contact" onClick={() =>setShow(false)}>CONTACT US</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ClosiongNav
