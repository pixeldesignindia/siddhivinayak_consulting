'use client'
import React,{useState, useEffect} from 'react'
import './HomeRers.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';
import menu from '../../../../public/images/Menu.svg';
import Menuline from '../../../../public/images/Menuline.svg';
import blackMenuline from '../../../../public/images/blackMenu.svg';
import closeBtn from '../../../../public/images/close-btn.svg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePathname , useRouter } from 'next/navigation'
function HomeResNav() {

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

    const pathname = usePathname()
    const router = useRouter()
    const [show, setShow] = useState(false);
    return (
        <div className='closing-Nav'>
            <div className="home-nav-container">
                <div className="row">
                    <div className="col-2" onClick={()=>{router('/')}}><Image src={logo} height={70} width={200} className='nav-logo home-nav-logo' /></div>
                    <div className="col-10 menu-btn" onClick={()=>{setShow(true);}} style={{cursor:'pointer'}}>
                    {windowWidth > 500 ? (
        <Image src={Menuline}/>
      ) : (
        <Image src={Menuline}/>
      )}
                        
                    </div>
                </div>
            </div>
            <Modal show={show} fullscreen={true} onHide={() =>setShow(false)}>
                <Modal.Body closeButton>
                    <div className='modal-Close' onClick={() =>setShow(false)} style={{cursor:'pointer'}}> <Image src={closeBtn}/> </div>
                    <div className="horizontal-nav-container" onClick={() =>setShow(false)}>
                    <Link className={`link d-flex align-items-center ${pathname === '/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/">HOME</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/aboutUs' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/aboutUs">ABOUT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/privateEqity' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/privateEqity">PRIVATE EQUITY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/demateAccount' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/demateAccount">DEMATE ACCOUNT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/luxuryProperty' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/luxuryProperty">LUXURY PROPERTY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/businessInsurance' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/businessInsurance">BUSINESS INSURANCE</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/contact' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/contact">CONTACT US</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default HomeResNav
