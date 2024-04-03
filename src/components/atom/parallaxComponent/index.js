import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import './style.css'; // Assuming you have a CSS file for styling

const ParallaxComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate mouse position in viewport
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({ x, y });
    };

    // Attach event listener to window for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="parallax-container">
      <div className="background" style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}></div>
      <div className="photos" style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}>
        <Image src='/photos/person.png' height='488' width='381' alt='person'></Image>
      </div>
      <div className="cards" style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}>
        <h4>Name Lastname</h4>
        <p>Position</p>
        <p>Company</p>
      </div>
    </div>
  );
};

export default ParallaxComponent;
