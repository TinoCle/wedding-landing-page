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
        className="image-cover-all"
      />
      <h1 className="overlayText" style={{ fontSize: '8rem', marginBottom: '2rem' }}>Canciones infaltables</h1>
      <a
        href="https://open.spotify.com/playlist/1BpMO0WFfk4oGrSpGelhGN?si=VeX5ATG3Sr6w7EKKSoeZpw&pt=e10dc2e2baea172c008868127e617692&pi=u-WFKLlCohSMif"
        className="button-style"
        target="_blank"
      >
        Lista de Spotify
      </a>
    </div>
  );
}

export default Songs;
