import React, { useState } from 'react';

function Hello() {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    const text = e.target;
    setValue(text.value);
  };
  return (
    <div>
      <input onChange={onChange} placeholder="값 입력" value={value} />
      <button>제출</button>
      <div> 값: {value}</div>
    </div>
  );
}
export default Hello;
