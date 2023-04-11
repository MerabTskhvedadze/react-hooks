import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);

  //note: ref does not causes reupdate component when it is changed
  //note: so if we want to count renders we should use ref
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My Is Name {name}</h1>
      <h2>i rendered {renderCount.current} times</h2>
    </div>
  );
}
