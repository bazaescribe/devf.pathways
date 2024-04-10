// src/pages/about.tsx

import React from 'react';
import Navbar from '@/components/molecule/Navbar'
import Image from 'next/image';

import Footer from '@/components/molecule/Footer'
import JoinServer from '../../components/organism/banner/joinServer';

import styles from '../../app/globals.css'; // Adjust the path to your global.css file
import './style.css'; // Assuming you have this CSS module
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { title } from 'process';

const targets = {
  'awarness': {
    description: "Inicia tu viaje en el mundo de la tecnología con nuestro curso gratuito de computación básica. Inscríbete ahora.",
    keypoints: [
      "Clases remotas completamente en vivo.",
      "Material adicional y prácticas.",
      "Aprende a utilizar equipos de computo modernos.",
      "Sensei experto en la materia."
    ]
  },
  'consideration': {
    description: "Acelera tu carrera en tecnología con nuestro curso gratuito de computación básica.",
    keypoints: [
      "Vive la experiencia dev.f sin compromisos",
      "Curso introductorio para principiantes.",
      "Aprende el correcto uso de una computadora antes de comenzar a programar.",
      "Acceso libre con tu inscripción.",
      "Puedes omitirlo y volver después si lo necesitas."
    ]
  },
  'decision': {
    description: "Accede al programa de computación básica sin costo alguno como beneficio de acceder a la sesión informativa.",
    keypoints: [
      "Curso introductorio para principiantes.",
      "Aprende el correcto uso de una computadora antes de comenzar a programar.",
      "Acceso libre con tu inscripción.",
      "Puedes omitirlo y volver después si lo necesitas."
    ]
  },
  'retention': {
    description: "¿Tienes problemas con el código? Da un paso atrás para tomar vuelo y accede a nuestro curso introductorio a la computación sin costo adicional.",
    keypoints: [
      "Curso introductorio para principiantes.",
      "Aprende el correcto uso de una computadora antes de comenzar a programar.",
      "Acceso libre con tu inscripción.",
      "Puedes tomar este curso y volver a tu master al concluirlo."
    ]
  },
  'recovery': {
    description: "Aprender puede ser dificil, retoma tu aprendizaje con este curso gratuito de computación básica.",
    keypoints: [
      "Curso introductorio para principiantes.",
      "Aprende el correcto uso de una computadora antes de comenzar a programar.",
      "Acceso libre con tu inscripción.",
      "Puedes tomar este curso y volver a tu master al concluirlo."
    ]
  },
  'schoolarship': {
    description: "Aprovecha una segunda oportunidad con nuestro curso gratuito de computación básica, diseñado para tu éxito y crecimiento.",
    keypoints: [
      "Sin Compromisos Financieros: Sin costo, facilitando tu participación sin estrés económico.",
      "Flexibilidad y Soporte: Contenidos adaptados a diferentes niveles, con soporte continuo.",
      "Crecimiento Personal y Profesional: Potencia tu currículum y habilidades personales."
    ]
  }
};


const ModuleZero = () => {
  const router = useRouter();

  const [courseInfo, setCourseInfo] = useState({
    title: 'Intro a la computación',
    description: '', 
    keypoints: '',
  });

  useEffect(() => {
    // Ensure router is ready and has query
    if (router.isReady) {
      const { target } = router.query; // Correctly destructures 'eventId' from router.query

      const courseInfo = targets[target]; 
      
      console.log(target);
      console.log(courseInfo);

      console.log(courseInfo.description);

      if (courseInfo) {
        setCourseInfo(courseInfo); // If eventData exists, update the state
      }
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <div className="ribbon">
        Lugares limitados
      </div>
      <main>
        <Navbar></Navbar>

        <header className='py-800'>

          <div className="container row justify-content-between gap-200">
            <div className='d-flex flex-direction-column gap-200'>
              <div className="d-flex flex-direction-column">
                <p className="chirp">
                  Curso gratuito
                </p>
                <h1>
                  Intro a la computación
                </h1>
                <p>
                  {courseInfo.description}
                </p>
              </div>
              
              <div id="keypoints" className='d-flex flex-direction-column gap-075'>
                {
                  courseInfo.keypoints && courseInfo.keypoints.map((keypoint, index) => (
                    <p key={index} className='caption'> ✅ {keypoint} </p>
                  ))
                }
              </div>
              <h3>
                $0.00
              </h3>
            </div>
            <div>
              <Image src='/assets/computacion-basica.png' width={550} height={348} alt='xxxx' layout='contain'></Image>
            </div>
          </div>
          
          
        </header>

        <section className='container d-flex flex-direction-column gap-800 py-800'>
          <article className='center d-flex flex-direction-column gap-200'>
            <p>
              Nuestros egresados trabajan en las empresas más innovadoras
            </p>
            <div className="d-flex justify-content-center gap-200 flex-wrap align-items-center">
              <Image src='/logos/facebook.png' width={120} height={28} alt='Facebook' />
              <Image src='/logos/google.png' width={84.66} height={28} alt='Google' />
              <Image src='/logos/microsoft.png' width={112.26} height={24} alt='Microsoft' />
              <Image src='/logos/uber.png' width={68.88} height={24} alt='Uber' />
              <Image src='/logos/amazon.png' width={93} height={28} alt='Amazon' />
              <Image src='/logos/apple.png' width={24} height={28} alt='Apple' />
            </div>
          </article>

          <JoinServer></JoinServer>

          <article>
            <h3 className="mb-150">
              ¿Por qué aprender con dev.f?
            </h3>
            
            <div className="d-flex flex-wrap gap-300">
              <div className="keypoint">
                <h4>💼</h4>
                <p className="bold">Job board</p>
                <p>
                  Connect with hundreds of companies looking for people like you.
                </p>
              </div>
              <div className="keypoint">
                <h4>⭐️</h4>
                <p className="bold">Money back warranty</p>
                <p>
                  If you can’t find a tech job after completing the program you receive your money back. Learn more...
                </p>
              </div>
              <div className="keypoint">
                <h4>🧱</h4>
                <p className="bold">Learn by building</p>
                <p>
                  Our program focus heavily on building real tech solutions that prepare you to the real deal.
                </p>
              </div>
              <div className="keypoint">
                <h4>🔴</h4>
                <p className="bold">Live sesions</p>
                <p>
                  We know it’s hard to learn by your own, you’ll have a teacher all along your course to guide you through your journey.
                </p>
              </div>
              <div className="keypoint">
                <h4>🌎</h4>
                <p className="bold">Remote learning</p>
                <p>
                From your house, the beach or your favourite coffee shop, join the classes wherever you are.
                </p>
              </div>
              <div className="keypoint">
                <h4>📺</h4>
                <p className="bold">Review your classes as much as you want</p>
                <p>
                  No matter if you missed a session or didn’t quite catch the lecture, you can always go back to the class recording.
                </p>
              </div>
              <div className="keypoint">
                <h4>👾</h4>
                <p className="bold">Online Campus</p>
                <p>
                  We have thousands of hours of additional content and elective classes to complement your course.
                </p>
              </div>
              <div className="keypoint">
                <h4>🙋‍♀️</h4>
                <p className="bold">Join the community</p>
                <p>
                  Connect with thousands of tech students in more than 30 countries.
                </p>
              </div>
            </div>
          </article>
        </section>
        
        <section className='bg-dark-secondary'>
          <article className='container py-500'>
            <h3 className="mb-150">
              Preguntas frecuentes
            </h3>

            <div className="d-flex gap-100 flex-wrap">
              <div>
                <h6>💬</h6>
                <h6>Sobre la sesión informativa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium consequatur eveniet. Magni quas velit incidunt, repellendus, nulla amet asperiores dicta atque, itaque temporibus doloremque at cum nostrum qui? Ex!
                </p>
              </div>
              <div>
                <h6>💬</h6>
                <h6>Sobre la sesión informativa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium consequatur eveniet. Magni quas velit incidunt, repellendus, nulla amet asperiores dicta atque, itaque temporibus doloremque at cum nostrum qui? Ex!
                </p>
              </div>
              <div>
                <h6>💬</h6>
                <h6>Sobre la sesión informativa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium consequatur eveniet. Magni quas velit incidunt, repellendus, nulla amet asperiores dicta atque, itaque temporibus doloremque at cum nostrum qui? Ex!
                </p>
              </div>
              <div>
                <h6>💬</h6>
                <h6>Sobre la sesión informativa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium consequatur eveniet. Magni quas velit incidunt, repellendus, nulla amet asperiores dicta atque, itaque temporibus doloremque at cum nostrum qui? Ex!
                </p>
              </div>
              <div>
                <h6>💬</h6>
                <h6>Sobre la sesión informativa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium consequatur eveniet. Magni quas velit incidunt, repellendus, nulla amet asperiores dicta atque, itaque temporibus doloremque at cum nostrum qui? Ex!
                </p>
              </div>
            </div>

            
          </article>

        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default ModuleZero;
