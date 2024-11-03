import React from 'react';

const Food = () => {
  return (
    <div className="heroContainer">
      <img src="./food.png" alt="Gifts Circle" className="backgroundGifts" />
      <div className="textContainer">
        <h1 className="overlayText text-9xl sm:text-9xl md:text-9xl lg:text-9xl mb-9 text-center">Catering</h1>
        <h1 className="leftText text-2xl sm:text-2xl md:text-2xl lg:text-2xl mt-9 text-center">
          La tarjeta incluye comida y bebida toda la noche
        </h1>
        <h1 className="leftText text-2xl sm:text-2xl md:text-2xl lg:text-2xl mt-1 text-center">
          45 días antes de la fecha confirmaremos el precio final
        </h1>
        <h1 className="leftText text-2xl sm:text-2xl md:text-2xl lg:text-2xl mt-1 text-center">
          El precio estimado es de $30.000 por persona
        </h1>
      </div>
    </div>
  );
}

export default Food;
