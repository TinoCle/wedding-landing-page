import React from 'react';

const Dresscode = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',  // Position content at the top
      alignItems: 'center',
      position: 'relative',
      width: '100vw',
      height: '100vh',
      paddingTop: '5rem',  // Adjust this value as needed for spacing
    }}>
      <img
        src="./dresscode.png"
        alt="Background"
        className="image-cover-all"
      />
      <h1 className="overlayText" style={{ fontSize: '8rem', marginBottom: '2rem' }}>Dresscode</h1>
      <p className="leftText text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-center">
        Elegante
      </p>
    </div>
  );
}

export default Dresscode;
