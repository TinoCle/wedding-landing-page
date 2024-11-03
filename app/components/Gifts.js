import React from 'react';

const Gifts = () => {
  return (
    <div className="heroContainer">
      <img src="./gifts-pink.png" alt="Gifts Circle" className="backgroundGifts" />
      <div className="textContainer">
        <h1 className="overlayText text-9xl sm:text-9xl md:text-9xl lg:text-9xl mb-9 text-center">Regalos</h1>
        <h1 className="leftText text-2xl sm:text-2xl md:text-2xl lg:text-2xl mt-9 text-center">
          Su presencia es nuestro mejor regalo.
        </h1>
        <h1 className="leftText text-2xl sm:text-2xl md:text-2xl lg:text-2xl mt-1 text-center">
          Si prefieren un obsequio virtual,
        </h1>
        <h1 className="leftText text-2xl sm:text-2xl md:text-2xl lg:text-2xl mt-1 text-center">
          nuestro alias es:
        </h1>
        <h1 className="leftText text-4xl sm:text-4xl md:text-4xl lg:text-4xl mt-4 text-center">
          boda.mai.tino
        </h1>
      </div>
    </div>
  );
}

export default Gifts;
