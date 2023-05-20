import './style.css';
import React from 'react';
import { useState, useRef, useEffect } from 'react';

export default function Counter() {
  const timer = useRef(null);
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  // const [timerIsRunning, setTimerIsRunning] = useState(true);
  const clear = () => clearInterval(timer.current);
  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return clear;
  }, []);

  useEffect(() => {
    if (timeLeft === 0) clear();
  }, [timeLeft]);
  return (
    <div>
      <h1>{clicks}</h1>
      <h2>Time left: {timeLeft} seconds</h2>
      {timeLeft > 0 && (
        <button onClick={() => setClicks((prev) => prev + 1)}>+</button>
      )}
      <button>Stop</button>
    </div>
  );
}
