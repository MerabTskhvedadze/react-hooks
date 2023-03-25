import { useState, useMemo } from 'react';

export default function App() {
  //note: every time our component re-renders this sloFunction runs
  //note: and it causes a delay on any changes that causes the components re-render
  //note: solution in this situation is useMemo hook (memo stands for memoization)
  //note: useMemo caching a value so you dont have to recompute it every single time
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //note: slowFunction runs if number changes
  //note: like this we have delay when numbers calculation is needed but not every single time
  //note: when some state changes for (example when themes state changes)
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = {
    backgroundColor: `${dark ? 'black' : 'white'}`,
    color: `${dark ? 'white' : 'black'}`,
  };

  //note: useMemo also saving the value, the previous value in some memory variable
  //note: and this memory getting larger every time when we using memo
  //note: so if we use useMemo every time when we actualy do not need
  //note: it may cause performance issues

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change themes</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
