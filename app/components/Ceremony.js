import React from 'react';

const Ceremony = () => {
  return (
    <div className="relative flex flex-col justify-around items-center w-screen h-screen py-16">
      <img
        src="./flowers4.png"
        alt="Background"
        className="absolute top-0 left-[-7rem] w-[50vw] h-[50vh] min-w-[300px] min-h-[300px] object-contain z-[-1]"
      />
      <h1 className="overlayText text-8xl sm:text-7xl md:text-9xl lg:text-9xl text-center md:pl-[10rem] lg:pl-[18rem]">
        Ceremonia Religiosa
      </h1>
      <p className="leftText text-xl sm:text-3xl md:text-6lg lg:text-5xl text-center">
        Lugar: Parroquia San Pedro Apóstol<br /><br />
        Hora: 18:30
      </p>
      <a
        href="https://maps.app.goo.gl/NVAPAxZ5fj4JN4mx7"
        className="button-style"
        target="_blank"
      >
        Cómo llegar
      </a>
    </div>
  );
}

export default Ceremony;
