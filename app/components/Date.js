import React from 'react';

function Date() {
  return (
    <div className="columnsContainer">
      <div className="column">
        <div className="leftContent">
          <img src="./flowers2.png" alt="Centered Image" className="leftImage" />
          <div className="textContainer">
            <h1 className="leftText text-7xl sm:text-7xl md:text-9xl">25</h1>
            <h1 className="leftText text-5xl sm:text-5xl md:text-7xl">de enero</h1>
          </div>
        </div>
      </div>
        <div className="column">
        <div className="textContainer">
          <h1 className="overlayText text-8xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl mb-8">Save</h1>
          <h1 className="overlayText text-8xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl mb-8">the date!</h1>
        </div>
      </div>
    </div>
  );
}

export default Date;
