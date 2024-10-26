import React, { useState, useEffect } from 'react';

export const runtime = "edge";

const Countdown = () => {
  const targetDate = new Date('2025-01-25T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

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
      <img
        src="./flowers3.png"
        alt="Background"
        className="image-cover-all"
      />
      <h1 className="overlayText" style={{ fontSize: '8rem', marginBottom: '4rem' }}>Faltan</h1>
      <div className="timeColumnsContainer">
        <div className="timeColumn">
          <div className="textContainer">
            <h1 className="time" style={{ fontSize: '6rem' }}>{timeLeft.days.toString().padStart(2, '0')}</h1>
            <h1 className="time text-3xl sm:text-3xl md:text-4xl">{timeLeft.days === 1 ? 'Día' : 'Días'}</h1>
          </div>
        </div>
        <div className="timeColumn">
          <div className="textContainer">
            <h1 className="time" style={{ fontSize: '6rem' }}>{timeLeft.hours.toString().padStart(2, '0')}</h1>
            <h1 className="time text-3xl sm:text-3xl md:text-4xl">{timeLeft.hours === 1 ? 'Hora' : 'Horas'}</h1>
          </div>
        </div>
        <div className="timeColumn">
          <div className="textContainer">
            <h1 className="time" style={{ fontSize: '6rem' }}>{timeLeft.minutes.toString().padStart(2, '0')}</h1>
            <h1 className="time text-3xl sm:text-3xl md:text-4xl">{timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
