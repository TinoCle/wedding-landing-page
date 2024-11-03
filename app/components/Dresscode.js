import React from 'react';

const Dresscode = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      width: '100vw',
      height: '100vh',
      paddingTop: '2rem',
    }}>
      <img
        src="./dresscode.png"
        alt="Background"
        className="image-cover-top"
      />
      <h1 className="overlayText text-8xl sm:text-6xl md:text-9xl lg:text-9xl xl:text-8xl mb-8">
        Dresscode
      </h1>
      <p className="leftText text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-center">
        Elegante
      </p>
      <p
        className="leftText text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center "
        style={{ paddingTop: '2rem' }}
      >
        👇🏼
      </p>
      <p
        className="leftText text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center "
      >
        Color blanco reservado para la novia
      </p>
      <p
        className="leftText text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center "
      >
        👆🏼
      </p>
    </div>
  );
}

export default Dresscode;
