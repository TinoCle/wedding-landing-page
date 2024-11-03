import React from 'react';

const Form = () => {
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
        src="./form.png"
        alt="Background"
        className="image-cover-top"
      />
      <h1 className="overlayText text-8xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-8xl mb-8">
        Confirmá tu asistencia
      </h1>
      <a
        href="https://forms.gle/LpE77X8PHafRgYEf7"
        className="button-style mt-9"
        target="_blank"
      >
        Formulario
      </a>
    </div>
  );
}

export default Form;
