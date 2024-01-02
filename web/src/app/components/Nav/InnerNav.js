'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/blogo.svg';
import { usePathname , useRouter } from 'next/navigation'

function InnerNav() {

  const pathname = usePathname()

  return (
    <div className='main-nav'>
      <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary' >
        <Container className='innerNavC'>
          <Navbar.Brand href="/"> <Image src={logo} height={70} width={200} className='nav-logo' alt='image'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Link className={`ilink d-flex align-items-center ${pathname === '/' ? 'iactiveNav' : ''}`}href="/">HOME</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/aboutUs/' ? 'iactiveNav' : ''}`}href="/aboutUs">ABOUT</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/privateEqity/' ? 'iactiveNav' : ''}`}href="/privateEqity">PRIVATE EQUITY</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/demateAccount/' ? 'iactiveNav' : ''}`}href="/demateAccount">DEMATE ACCOUNT</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/dubaiProperty/' ? 'iactiveNav' : ''}`}href="/dubaiProperty">DUBAI PROPERTY</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/billDiscounting/' ? 'iactiveNav' : ''}`}href="/billDiscounting">BILL DISCOUNTING</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/contact/' ? 'iactiveNav' : ''}`}href="/contact/">CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default InnerNav;
