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
        className="image-cover-bottom"
      />
      <h1 className="overlayText text-8xl sm:text-6xl md:text-9xl lg:text-9xl xl:text-8xl mt-8 mb-8">
        Dresscode
      </h1>
      <p className="leftText text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-center">
        Elegante
      </p>
      <p
        className="leftText text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center mt-3"
      >
        Color blanco reservado para la novia
      </p>
    </div>
  );
}

export default Dresscode;
