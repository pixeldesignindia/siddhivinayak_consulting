'use client'
import React,{useState, useEffect} from 'react'
import './HomeRers.css'
import Link from 'next/link';
import Image from 'next/image';
import wlogo from '../../../../public/images/wlogo.svg';
import rlogo from '../../../../public/images/blogo.svg';
import menu from '../../../../public/images/Menu.svg';
import Menuline from '../../../../public/images/Menuline.svg';
import blackMenuline from '../../../../public/images/blackMenu.svg';
import closeBtn from '../../../../public/images/close-btn.svg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePathname , useRouter } from 'next/navigation'
function HomeResNav() {
  const pathname = usePathname()
  const router = useRouter()
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
  const logo = isSmallWindow ? rlogo : wlogo;


    return (
        <div className='closing-Nav'>
            <div className="home-nav-container h-res-n">
                <div className="row">
                    <div className="col-2 logo-c" onClick={()=>{router.push('/')}}><Image src={logo} height={70} width={200} className='nav-logo home-nav-logo' alt='image'/></div>
                    <div className="col-10 menu-btn" onClick={()=>{setShow(true);}} style={{cursor:'pointer'}}>
        <Image src={blackMenuline} className='menu-btn-res' alt='image'/>
                        
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
            <Link className={`link d-flex align-items-center ${pathname === '/billDiscounting/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/billDiscounting" onClick={() =>setShow(false)}>BILL DISCOUNTING/</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/contact/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/contact" onClick={() =>setShow(false)}>CONTACT US</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default HomeResNav
