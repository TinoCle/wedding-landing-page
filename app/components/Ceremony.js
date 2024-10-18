import React from 'react';

const Ceremony = () => {
  return (
    <div className="relative flex flex-col justify-around items-center w-screen h-screen py-16">
      <img
        src="/flowers4.png"
        alt="Background"
        className="absolute top-0 left-[-7rem] w-[50vw] h-[50vh] min-w-[300px] min-h-[300px] object-contain z-[-1]"
      />
      <h1 className="overlayText text-8xl sm:text-7xl md:text-6xl lg:text-8xl text-center md:pl-[10rem] lg:pl-[18rem]">
        Ceremonia Religiosa
      </h1>
      <p className="leftText text-2xl sm:text-xl md:text-lg lg:text-2xl text-center md:pl-[10rem] lg:pl-[18rem]">
        Lugar: Parroquia San Pedro Apóstol<br />
        Hora: 19:30
      </p>
      <a
        href="https://maps.app.goo.gl/NVAPAxZ5fj4JN4mx7"
        style={{
          padding: '1rem 2rem',
          backgroundColor: 'pink',
          color: 'white',
          fontFamily: 'Belleza, sans-serif',
          fontSize: '1.5rem',
          textDecoration: 'none',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          borderRadius: '8px'
        }}
      >
        Cómo llegar
      </a>
    </div>
  );
}

export default Ceremony;
