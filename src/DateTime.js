import React, { useState, useEffect } from 'react';
import calendarImage from './calendar.png';
import clockImage from './clock.png';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div align="center">
        <div></div>
      <h1>Date and Time</h1>
      <div className="date-time-container">
        <div className="date-container">
          <img src={calendarImage} alt="Calendar" className="icon" />
          <h1>{currentDateTime.toLocaleDateString()}</h1>
        </div>
        <div className="time-container">
          <img src={clockImage} alt="Clock" className="icon" />
          <h1>{currentDateTime.toLocaleTimeString()}</h1>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
