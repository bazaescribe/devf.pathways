import React from 'react';
import Image from 'next/image';
import styles from './style.css'; // Assuming this imports correctly

const BannerInfo = () => {
  return (
    <div className="card contrast padded row">
      <div id='orbit' className='d-flex align-content-center justify-content-center'>
        <Image src="/assets/orbit/sun.png" height='200' width='200' alt='Speaker on a live sesion' className='sun'></Image>
        <div className="path">
          <Image src="/assets/orbit/orbit.png" height='300' width='300' alt='Planet 1'></Image>
        </div>
        <div className="planet-orbit orbit1">
          <Image src="/assets/orbit/planet-1.png" height='80' width='80' alt='Planet 1'></Image>
        </div>
        <div className="planet-orbit orbit2">
          <Image src="/assets/orbit/planet-2.png" height='80' width='80' alt='Planet 2'></Image>
        </div>
        <div className="planet-orbit orbit3">
          <Image src="/assets/orbit/planet-3.png" height='80' width='80' alt='Planet 3'></Image>
        </div>
      </div>
      <div className='d-flex align-content-center justify-content-center flex-direction-column'>
        <h3>Descubre el programa ideal para ti</h3>
        <p>Sesiones informativas gratuitas todas las semanas.</p>
      </div>
    </div>
  );
};

export default BannerInfo;
