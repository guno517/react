import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './inputSample';

function App() {  
  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>  {/* isSpecial={true}랑 같은 값 */}
      <Hello color="blue" />
    </Wrapper>
    <Counter />
    <hr />
    <InputSample />
    </>
  );
}

export default App;
