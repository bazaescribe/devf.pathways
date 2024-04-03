import React from 'react';
import Image from 'next/image';
import "./style.css";

const JoinServer = () => {


  return (
    <div className="card discord d-flex gap-500 align-items-center">
      <div className="d-flex flex-direction-column gap-200 p-500">
        <div>
          <h2>¡Únete a la comunidad!</h2>
          <p>
            Miles de estudiantes en toda América Latina comparten su conocimiento, gustos e ideas todos los días en dev.f. <br /> ¡Únete ahora! Es completamente gratis.
          </p>
        </div>
        
        <div>
          <p className="small">Powered by</p>
          <Image src="/logos/discord-full.png" width={128} height={24} alt='Discord'></Image>
        </div>
        <button className='btn main align-self-start'>Unirme ahora</button>
      </div>
      
      <Image src="/assets/server.png" width={570} height={370} alt='Server illustration'></Image>
    </div>
  );
};

export default JoinServer;