import { useState } from 'react';
import UseState from './UseState';

function App() {
  return (
    <>
      <UseState />
    </>
  );
}

export default App;

//**React hook rules**//
/* 
~1)Only call Hooks at the top level: 
  You should only call Hooks from the top level of your component
  or your own custom Hooks. 
  You should not call Hooks inside loops, conditions, or nested functions.

~2)Only call Hooks from React function components:
  You can only call Hooks from React function components,
  not from regular JavaScript functions.

~3)Use the useEffect Hook for side effects: 
  You should use the useEffect Hook for any logic that runs after render, 
  such as setting up a subscription or changing the document title.

~4)Keep state updates simple: 
  State updates should be simple and not depend on previous state values. 
  If you need to update state based on the previous state, you should use the setState callback instead of updating state directly.

~5)Don't call Hooks inside loops: 
  Hooks should not be called inside loops 
  because they will cause multiple re-renders 
  and potentially unexpected behavior.

~6)Don't call Hooks from inside React class components: 
  You should not call Hooks from inside React 
  class components because Hooks are 
  only meant to be used with function components.
*/
