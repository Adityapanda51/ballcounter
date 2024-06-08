
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow', 'cyan', 'violet', 'indigo',];

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const generateRandomKeyframes = (index) => {
    const keyframes = `
      @keyframes move-and-rotate-${index} {
        0% {
          transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) rotate(0deg);
        }
        25% {
          transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) rotate(90deg);
        }
        50% {
          transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) rotate(180deg);
        }
        75% {
          transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) rotate(270deg);
        }
        100% {
          transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) rotate(360deg);
        }
      }
    `;
    return keyframes;
  };

  const renderBalls = () => {
    const balls = [];
    for (let i = 0; i < count; i++) {
      const color = colors[i % colors.length];
      const keyframes = generateRandomKeyframes(i);
      const style = document.createElement('style');
      style.innerHTML = keyframes;
      document.head.appendChild(style);
      balls.push(
        <div className="ball" key={i} style={{ backgroundColor: color, animation: `move-and-rotate-${i} 10s linear infinite` }}></div>
      );
    }
    return balls;
  };

  return (
    <div className="App">
      <h1>Ball Counter: {count}</h1>
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div>
        <button className="button reset" onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="ball-container">{renderBalls()}</div>
    </div>
  );
};

export default App;
