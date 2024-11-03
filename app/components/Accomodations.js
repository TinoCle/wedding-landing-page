import React from 'react';

const Accomodations = () => {
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
        src="./accomodations.png"
        alt="Background"
        className="image-cover-bottom"
      />
      <h1 className="overlayText text-8xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-8xl mb-8">
        ¿Necesitás alojamiento?
      </h1>
      <a
        href="https://drive.google.com/file/d/1xUYwwVqhB4ZtFQ5cv1UD9thwL5DG90vD"
        className="button-style mt-9"
        target="_blank"
      >
        Listado
      </a>
    </div>
  );
}

export default Accomodations;
