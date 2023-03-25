import { useState, useEffect } from 'react';

function App() {
  /*
    //note: this is most basic use case of useEffect
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
    }, [resourceType]);
    //note: without second argument useEffect will run on every re-render of component
    //note: if we have second argument but it is empty array useEffect will run onMount
    //note: but if we have some state variable(like that) in array it will run on every change of this state

    
    return (
      <>
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map((item) => {
          return <p>{JSON.stringify(item)}</p>;
        })}
      </>
    );
  */

  //note: complicated example
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = (e) => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    //note: cleanup function
    //note: cleanup function runs first to cleanup code that we write last time
    //note: also cleanup function runs when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //note: when we add eventListener if we for example delete or unMount App component we want to
  //note: remove this eventListener because otherwise we gonna re-add event listeners
  //note: which is gonna slow down performance
  //note: so we writting cleanup functions that cleaningup code that we write in useEffect

  return <h1>width: {windowWidth}</h1>;
}

export default App;
