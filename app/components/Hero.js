import React from 'react';

export const runtime = "edge";

const Hero = () => {
  return (
    <div className="heroContainer">
      <img src="./flowers1.png" alt="Flower Circle" className="backgroundImage" />
      <div className="textContainer">
        <h1 className="overlayText" style={{fontSize: '4rem'}}>Bienvenidos</h1>
        <h1 className="overlayText" style={{fontSize: '4rem'}}>a la boda de</h1>
        <h1 className="overlayText" style={{fontSize: '7rem'}}>Mai y Tino</h1>
      </div>
    </div>
  );
}

export default Hero;
