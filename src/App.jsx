import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef('');
  const prevValue = useRef('');

  //note: ref does not causes reupdate component when it is changed
  //note: so if we want to count renders we should use ref
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focus = () => {
    //note: inputRef gives the current element
    console.log(inputRef);
    inputRef.current.focus();
  };

  //note: another usecase of useRef is store previous values of element
  useEffect(() => {
    prevValue.current = name;
  }, [name]);

  return (
    <div>
      {/* part1 */}
      <input
        ref={inputRef}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My Is Name {name}</h1>
      <h2>i rendered {renderCount.current} times</h2>

      {/* part2 */}
      <button onClick={focus}>Focus</button>

      {/* part3 */}
      <p>
        My name is {name} and used to be {prevValue.current}
      </p>
    </div>
  );
}
