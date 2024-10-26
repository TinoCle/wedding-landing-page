import React from 'react';


const Celebration = () => {
  return (
    <div className="relative flex flex-col justify-around items-center w-screen h-screen py-16">
      <img
        src="./flowers5.png"
        alt="Background"
        className="absolute top-0 right-[-7rem] w-[50vw] h-[50vh] min-w-[300px] min-h-[300px] object-contain z-[-1]"
      />
      <h1 className="overlayText text-8xl sm:text-7xl md:text-6xl lg:text-9xl text-center md:pr-[10rem] lg:pr-[18rem]">
        Celebración
      </h1>
      <p className="leftText text-2xl sm:text-xl md:text-lg lg:text-5xl text-center">
        Lugar: O’Clock Río Tercero<br />
        Hora: 20:30
      </p>
      <a
        href="https://maps.app.goo.gl/gnW8RFqWQBKzVGEe7"
        className="button-style"
        target="_blank"
      >
        Cómo llegar
      </a>
    </div>
  );
}

export default Celebration;
