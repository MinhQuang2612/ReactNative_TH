import React, { useRef, useEffect } from 'react';

const TimerComponent = () => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return null;
};
