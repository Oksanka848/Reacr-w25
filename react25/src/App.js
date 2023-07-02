import './App.css';
import React, { useState } from 'react';

const Counter = () =>{
  const [count, setCount] = useState(0);
  const handleClick = () =>
    setCount(currentCount => currentCount + 1);
      return (
      <button type="button" onClick={handleClick}>
        {count}
      </button>
    );
  };
export default Counter;
