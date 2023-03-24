import { useState } from 'react';
import './App.css';

const themesArr = ['blue', 'red', 'orange', 'green', 'grey', 'yellow'];

function UseState() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={onClickMinus}>-</button>
      <span>{count}</span>
      <span>{themesArr[theme]}</span>
      <button onClick={onClickPlus}>+</button>
    </>
  );
}

export default UseState;
