import React from 'react';

const Celebration = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      position: 'relative',
      padding: '4rem 0'
    }}>
      <img
        src="/flowers4.png"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          right: '-7rem',  // Moved image to the right
          width: '50vw',
          height: '50vh',
          objectFit: 'contain',
          zIndex: -1,
        }}
      />
      <h1 className="overlayText" style={{ fontSize: '8rem', paddingRight: '18rem' }}> {/* Right padding */}
        Celebración
      </h1>
      <p className="leftText" style={{ fontSize: '2rem', textAlign: 'center'}}> {/* Right padding */}
        Lugar: O’Clock Río Tercero<br />
        Hora: 20:30
      </p>
      <a href="https://maps.app.goo.gl/gnW8RFqWQBKzVGEe7" style={{
        padding: '1rem 2rem',
        backgroundColor: 'pink',
        color: 'white',
        fontFamily: 'Belleza, sans-serif',
        fontSize: '1.5rem',
        textDecoration: 'none',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px'
      }}>
        Cómo llegar
      </a>
    </div>
  );
}

export default Celebration;
