'use client'

// src/components/atom/button/Button.js
import React from 'react';
import Image from 'next/image';
import ParallaxComponent from '@/components/atom/parallaxComponent';
import Button from "@/components/atom/button";
import styles from './style.css'; // Assuming you have this CSS module

const HeaderPhoto = () => {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div>
              <ParallaxComponent></ParallaxComponent>
            </div>
            <div className='d-flex flex-direction-column gap-100 justify-content-center'>
              <h1>
                Continúa aprendiendo
              </h1>
              <p>
                Recibe un descuento de hasta el 10% en tu programa intensvo con dev.f
              </p>
              <div className="d-flex gap-100 discount">
                <p>
                  Código: Novato
                </p>
                <Button>Reclamar mi descuento</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

export default HeaderPhoto;

