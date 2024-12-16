import React from 'react';

const Songs = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
      width: '100vw',
      height: '100vh',
      paddingBottom: '5rem',
    }}>
      <img
        src="./songs.png"
        alt="Background"
        className="image-cover-top"
      />
      <h1 className="overlayText text-8xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-8xl mb-8">
        Canciones infaltables
      </h1>
      <a
        href="https://open.spotify.com/playlist/1BpMO0WFfk4oGrSpGelhGN?si=uE1TgGplRIiSAZZ_1gntcA&pt=a844af2bc2a5ea27b9b0dd7b8bbdf1e7&pi=u-K_yolHWlSY-t"
        className="button-style mt-9"
        target="_blank"
      >
        Lista de Spotify
      </a>
    </div>
  );
}

export default Songs;
