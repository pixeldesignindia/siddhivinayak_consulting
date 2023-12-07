'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';
import { usePathname , useRouter } from 'next/navigation'

function MainNav() {

  const pathname = usePathname()


  return (
    <div className='main-nav'>
      <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary' >
        <Container >
          <Navbar.Brand href="/"> <Image src={logo} height={70} width={200} className='nav-logo'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Link className={`link d-flex align-items-center ${pathname === '/' ? 'activeNav' : ''}`}href="/">HOME</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/aboutUs' ? 'activeNav' : ''}`}href="/aboutUs">ABOUT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/privateEqity' ? 'activeNav' : ''}`}href="/privateEqity">PRIVATE EQUITY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/demateAccount' ? 'activeNav' : ''}`}href="/demateAccount">DEMATE ACCOUNT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/luxuryProperty' ? 'activeNav' : ''}`}href="/luxuryProperty">LUXURY PROPERTY</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/businessInsurance' ? 'activeNav' : ''}`}href="/businessInsurance">BUSINESS INSURANCE</Link>
            <Link className={`link d-flex align-items-center contact-btn ${pathname === '/contact' ? 'activeNav' : ''}`}href="/contact" style={{color:'#fff'}}>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
