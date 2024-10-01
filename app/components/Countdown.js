import React from 'react';

const Countdown = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100vw',
      height: '100vh'
    }}>
      <h1 className="overlayText" style={{ fontSize: '8rem' }}>Faltan</h1>
      <div className="timeColumnsContainer">
        <div className="timeColumn">
          <div className="textContainer">
            <h1 className="time" style={{ fontSize: '6rem' }}>00</h1>
            <h1 className="time" style={{ fontSize: '4rem' }}>Días</h1>
          </div>
        </div>
        <div className="timeColumn">
          <div className="textContainer">
            <h1 className="time" style={{ fontSize: '6rem' }}>00</h1>
            <h1 className="time" style={{ fontSize: '4rem' }}>Horas</h1>
          </div>
        </div>
        <div className="timeColumn">
          <div className="textContainer">
            <h1 className="time" style={{ fontSize: '6rem' }}>00</h1>
            <h1 className="time" style={{ fontSize: '4rem' }}>Minutos</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
