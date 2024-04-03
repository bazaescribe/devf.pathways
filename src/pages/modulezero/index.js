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

const mockupData = {
  'event1': {
    level: 'Beginner',
    title: 'Intro to React',
    description: 'Learn the basics of React, from components to state management.',
    speaker: 'John Doe',
  },
  'event2': {
    level: 'Intermediate',
    title: 'Understanding React Hooks',
    description: 'A deep dive into React Hooks and how they can be used to simplify your code.',
    speaker: 'Jane Doe',
  },
  // Add more events as needed
};

const targets = {
  'awarness': {
    description: "Sumérgete en el mundo de la tecnología con nuestro curso gratuito de computación básica. Perfecto para curiosos tecnológicos.",
    keypoints: [
      "Inicio Ideal: Explora los fundamentos de la computación en un formato amigable.",
      "Sin Presiones: Aprende a tu propio ritmo, sin presiones ni expectativas previas.",
      "Comunidad y Conexiones: Conéctate con otros apasionados por la tecnología."
    ]
  },
  'desition': {
    description: "Descubre cómo la computación puede ser accesible y transformadora para ti con nuestro curso gratuito de computación básica.",
    keypoints: [
      "Costo Accesible: Totalmente gratuito, eliminando barreras financieras.",
      "Fundamentos Sólidos: Aprende a tu ritmo, construyendo una base sólida en computación.",
      "Oportunidades Futuras: Abre puertas a nuevas oportunidades de aprendizaje y empleo."
    ]
  },
  'schoolarship': {
    description: "Aprovecha una segunda oportunidad con nuestro curso gratuito de computación básica, diseñado para tu éxito y crecimiento.",
    keypoints: [
      "Sin Compromisos Financieros: Sin costo, facilitando tu participación sin estrés económico.",
      "Flexibilidad y Soporte: Contenidos adaptados a diferentes niveles, con soporte continuo.",
      "Crecimiento Personal y Profesional: Potencia tu currículum y habilidades personales."
    ]
  },
  'consideration': {
    description: "Acelera tu carrera en tecnología con nuestro curso gratuito de computación básica. Un beneficio exclusivo por asistir a nuestra charla.",
    keypoints: [
      "Exclusividad: Acceso prioritario como agradecimiento por tu interés y participación.",
      "Aprendizaje Práctico: Enfoque en habilidades prácticas para aplicaciones reales desde el inicio.",
      "Comunidad de Apoyo: Sé parte de una comunidad activa y aprovecha el networking desde el día uno."
    ]
  },
  'retention': {
    description: "¿Te sientes abrumado con los primeros pasos en codificación? Nuestro curso gratuito de computación básica está diseñado para suavizar tu camino.",
    keypoints: [
      "Prevención de Obstáculos: Ayuda proactiva para asegurar que los desafíos iniciales no detengan tu aprendizaje.",
      "Aprendizaje a Tu Ritmo: Métodos de enseñanza flexibles que se adaptan a tus necesidades y ritmo de aprendizaje.",
      "Soporte Continuo: Acceso a recursos y soporte personalizado para garantizar tu progreso y comprensión."
    ]
  },
  'recovery': {
    description: "¿Te sientes abrumado con los primeros pasos en codificación? Nuestro curso gratuito de computación básica está diseñado para suavizar tu camino.",
    keypoints: [
      "Prevención de Obstáculos: Ayuda proactiva para asegurar que los desafíos iniciales no detengan tu aprendizaje.",
      "Aprendizaje a Tu Ritmo: Métodos de enseñanza flexibles que se adaptan a tus necesidades y ritmo de aprendizaje.",
      "Soporte Continuo: Acceso a recursos y soporte personalizado para garantizar tu progreso y comprensión."
    ]
  }
};


const ModuleZero = () => {
  const router = useRouter();
  const [eventInfo, setEventInfo] = useState({
    level: '',
    title: '',
    description: '',
    speaker: '',
  });

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
        ⭐️ Curso gratuito ⭐️
      </div>
      <main>
        <Navbar></Navbar>

        <header className='py-800'>

          <div className="container row justify-content-between gap-200">
            <div>
              <h1>
                Intro a la computación
              </h1>
              <p>
                {courseInfo.description}
              </p>
              <button className="btn">
                Inscribirme ahora
              </button>
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
