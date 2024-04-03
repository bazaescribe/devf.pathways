'use client'

import Image from "next/image";
import Button from '@/components/atom/button/'
import Navbar from '@/components/molecule/navbar'
import BannerInfo from '@/components/molecule/bannerInfo'
import Footer from "@/components/molecule/footer";
import ParallaxComponent from "@/components/atom/parallaxComponent"
import HeaderPhoto from "@/components/organism/headerPhoto"
import HeaderForm from "@/components/organism/headerForm";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>

      <HeaderPhoto></HeaderPhoto>

      {/* <HeaderForm></HeaderForm> */}

      <main className="container d-flex flex-direction-column gap-300">
        <section className="row">
          <BannerInfo></BannerInfo>
        </section>

        <section>
          <div className="card padded">
            <h3>
              Únete a una comunidad de más de 15,000 estudiantes
            </h3>
            <p>
              Desde 2015, en dev.f hemos capacitado a miles de personas en más de 30 países, generando miles de empleos y un incalculable beneficio para la región. ¡Únete ahora!
            </p>
          </div>
        </section>

        <section className="padded">
          <article>
            <h3 className="mb-150">
              ¿Por qué aprender con dev.f?
            </h3>
            
            <div className="d-flex flex-wrap gap-075">
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

          <article>
            <h3 className="mb-150">
              ¿Por qué aprender con dev.f?
            </h3>
            
            <div className="d-flex flex-wrap gap-075">
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
      
      </main>

      <Footer></Footer>

    </main>
  );
}
