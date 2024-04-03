'use client'

import Button from '@/components/atom/button'
import Logo from '@/components/atom/logo'
import Image from 'next/image';
import Link from 'next/link'
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className=''>
        <div className="container py-400 d-flex flex-direction-column gap-500">
          <Logo></Logo>
          <div className='d-flex gap-500 flex-wrap'>
            <div className="d-flex flex-direction-column gap-075">
              <p>Sitio</p>
              <Link href='#'>Inicio</Link>
              <Link href='#'>Campus</Link>
              <Link href='#'>Edu</Link>
              <Link href='#'>Comunidad</Link>
            </div>
            <div className="d-flex flex-direction-column gap-075">
              <p>Programas</p>
              <Link href='#'>Coding</Link>
              <Link href='#'>Data Science</Link>
            </div>
            <div className="d-flex flex-direction-column gap-075">
              <p>Legal</p>
              <Link href='#'>Términos y condiciones</Link>
              <Link href='#'>Aviso deprivacidad</Link>
              <Link href='#'>Poliza de devoluciones</Link>
              <Link href='#'>Protocolo de género</Link>
            </div>
            <div className="d-flex flex-direction-column gap-075">
              <p>Contacto</p>
              <Link href='#'>hola@devf.mx</Link>
              <Link href='#'>55 3670 1339</Link>
            </div>
          </div>
          <div className='d-flex gap-200 flex-wrap'>
            <div className='award'>
              <Image src='/logos/google.png' height='24' width='71' alt='Google' />
              <p>
                Una de las 9 Startups seleccionadas por el Google Launchpad Accelerator de LATAM en el 2019.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/bid.png' height='24' width='122' alt='BID' />
              <p>
                Ganadores del primer lugar en el Desafío de Bootcamps en América Latina del BID Lab en 2020.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/redbox.png' height='24' width='160' alt='Redbox' />
              <p>
                Reconocidos con el Premio Redbox como la Startup más innovadora de México en el 2017.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/forbes.png' height='24' width='83' alt='Forbes' />
              <p>
                Reconocidos por Forbes como una de las 30 empresas promesa de México en el 2018.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/holoniq.png' height='24' width='121' alt='HolonIQ' />
              <p>
                Las 100 empresas más relevantes de EdTech 2022.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/facebook.png' height='24' width='124' alt='Facebook' />
              <p>
                Alianza estratégica para becar a más de 500 alumnos.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/becalos.png' height='24' width='87' alt='Bécalos' />
              <p>
                Otorgamos becas del 100% para cursos de programación dirigidos a jóvenes del Sur-Sureste mexicano en 2023.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/techstars.png' height='24' width='121' alt='Google' />
              <p>
                Una de las 9 Startups seleccionadas por el Google Launchpad Accelerator de LATAM en el 2019.
              </p>
            </div>
            <div className='award'>
              <Image src='/logos/empresab.png' height='110' width='65' alt='Google' />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-100">
              <Link href='#'>
                <Image src="/logos/tiktok.png" width={22} height={24} alt='Tiktok'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/ig.png" width={24} height={24} alt='Instagram'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/x.png" width={29} height={24} alt='X antes twitter'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/linkedin.png" width={24} height={24} alt='Linkedin'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/youtube.png" width={56} height={24} alt='Youtube'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/facebook-sm.png" width={24} height={24} alt='Instagram'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/spotify.png" width={24} height={24} alt='Spotify'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/twitch.png" width={24} height={24} alt='Twitch'></Image>
              </Link>
              <Link href='#'>
                <Image src="/logos/discord.png" width={31} height={24} alt='Discord'></Image>
              </Link>
            </div>
            <Link href='#'>
              #getHacky
            </Link>
          </div>
          
          <div className='small outro'>
            <p>
              Copyright © 2023 DEVF HOLDINGS CORP. Todos los derechos reservados.
            </p>
            <p>
              DEV.F ofrece una solución innovadora a la inclusión educativa con programas EdTech que ayudan a las personas a convertirse en desarrolladores de software, dieñadores de producto y científicos de datos, así como obtener habilidades tecnológicas para así conseguir oportunidades laborales de alta calidad de manera ágil y accesible.
            </p>
          </div>
          
        </div>
      </footer>
      <div className='color-bar'>
      </div>
    </>
  );
};

export default Footer;