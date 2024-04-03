'use client'

// Import useState and useEffect
import React, { useState, useEffect } from 'react';
import Button from '@/components/atom/button';
import Image from 'next/image';
import "./style.css";

const Navbar = () => {
  // State to manage whether the navbar should be smaller
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isShrunk to true if page is scrolled more than 50px, otherwise false
      setIsShrunk(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`d-flex justify-content-between align-items-center px-150 ${isShrunk ? 'shrink' : ''}`}>
      <Image src='/logos/devf.png' height='24' width='109' alt='devf logo'></Image>
      <Button>Inscríbete ahora</Button>
    </nav>
  );
};

export default Navbar;
