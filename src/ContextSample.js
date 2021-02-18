import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext('defaultValue'); // <MyContext />가 사용되지 않았을 때의 기본 값.

function Child(){
    const text = useContext(MyContext); // context에 있는 값을 읽어와서 사용할 수 있도록 하는 hook
    return <div>안녕하세요 {text}</div>
}

function Parent(){
    return <Child />
}

function GrandParent(){
    return <Parent/>
}

function ContextSample(){
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value={value ? "GOOD" : 'BAD'}> {/**MyContext.Provider를 통해서 context(value)값을 설정을 하면 createContext값이 value값으로 변환 */}
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me!</button> {/**value가 true면 false로 전환 */}
    </MyContext.Provider>
    )
}

export default ContextSample;