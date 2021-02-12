import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './wrapper';

function App() {  
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
