import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

//note: when using context it is broken into two sections
//note: you have context provider which wraps code that needs to access context information
//note: it has a single prop called value which is going to be whatever the value of your context is
//note: the code inside provider and its childs and its childs have access to this value prop

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
