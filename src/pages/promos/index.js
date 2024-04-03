// src/pages/about.tsx

import React from 'react';
import Navbar from '@/components/molecule/Navbar'
import Image from 'next/image';

import Footer from '@/components/molecule/Footer'
import JoinServer from '../../components/organism/banner/joinServer';

import styles from '../../app/globals.css'; // Adjust the path to your global.css file
import './style.css'; // Assuming you have this CSS module


const Dojos = () => {
    return (
      <>
        <div className="ribbon">
          ¡Apresúrate! Quedan pocos lugares. 😮‍💨
        </div>
        <main>
          <Navbar></Navbar>
          <header className='center'>
            <div className="container center d-flex flex-direction-column gap-150 py-800">
              <h1>Asiste a la sesión informativa</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mauris nisi sit egestas accumsan lorem interdum tellus.
                <br /> 
                Facilisis a magnis consequat sit sed sapien ornare in accumsan.
              </p>
              <div className="d-flex justify-content-center">
                <button className='btn'>ver más</button>
              </div>
            </div>
            
            <Image src='/assets/orbit.png' width={753} height={376} alt='xxxx' layout='contain'></Image>
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

export default Dojos;
