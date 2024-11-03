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
      <h1 className="overlayText" style={{ fontSize: '8rem'}}>Dresscode</h1>
      <p className="leftText text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-center">
        Elegante
      </p>
      <p
        className="leftText text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center "
        style={{ paddingTop: '2rem' }}
      >
        👉🏼 Color blanco reservado para la novia 👈🏼
      </p>
    </div>
  );
}

export default Dresscode;
