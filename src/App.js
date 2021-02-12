import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './wrapper';

function App() {  
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="blue" />
    </Wrapper>
  );
}

export default App;
