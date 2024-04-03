// src/pages/about.tsx

import React from 'react';
import Navbar from '@/components/molecule/Navbar'

import styles from '../../app/globals.css'; // Adjust the path to your global.css file

const Dojos = () => {
    return (
      <>
        <Navbar></Navbar>
        <main>
          <div className="container pt-500">
            <header className='row gap-200'>
              <div>
                Course image here
              </div>
              <div className='d-flex flex-direction-column gap-100'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in quia atque perspiciatis voluptatem dolore, non vel sed magni maiores? Quas dolore deserunt minus! Pariatur, dolore labore. Est, illo totam?
                </p>

                <div className='d-flex gap-050'>
                  <span>🧭</span>
                  <p>
                    Lugar
                  </p>
                  <p className="bold">
                    Sesión remota por zoom
                  </p>
                </div>

                <div className='d-flex gap-050'>
                  <span>🗓️</span>
                  <p>
                    Fecha
                  </p>
                  <p className="bold">
                    17 de marzo de 2023
                  </p>
                </div>

                <div className='d-flex gap-050'>
                  <span>⏰</span>
                  <p>
                    Hora
                  </p>
                  <p className="bold">
                    19:30 hrs.
                  </p>
                </div>

                <div className='d-flex gap-050'>
                  <span>🎚️</span>
                  <p>
                    Nivel
                  </p>
                  <p className="bold">
                    Básico
                  </p>
                </div>

                <div className='d-flex gap-050'>
                  <span>💰</span>
                  <p>
                    Costo
                  </p>
                  <p className="bold">
                    $0.00
                  </p>
                </div>

                <div>
                  <a href="#" className="btn">
                    Quiero asistir
                  </a>
                </div>



              </div>
            </header>
          </div>
        </main>
      </>
    );
};

export default Dojos;
