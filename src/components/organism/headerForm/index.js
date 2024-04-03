'use client'

// src/components/atom/button/Button.js
import React from 'react';
import Image from 'next/image';
import ParallaxComponent from '@/components/atom/parallaxComponent';
import Button from "@/components/atom/button";
import styles from './style.css'; // Assuming you have this CSS module

const HeaderForm = () => {
    return (
      <header>
        <div className="container">
          <div className="row gap-150">
            <div className='d-flex flex-direction-column gap-100 justify-content-center'>
              <h1>
                Comienza tu viaje en tecnología
              </h1>
              <p>
                Descubre lo que hacemos en dev.f, únete a nuestra comunidad y participa en nuestros eventos. ¡Completamente gratis!
              </p>
            </div>
            <div className="card white">
              <form action="" className='d-flex flex-direction-column gap-100 padded'>
                <input type="text" /><input type="text" /><input type="text" /><input type="text" />
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  };

export default HeaderForm;

