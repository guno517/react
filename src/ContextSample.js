import React, {createContext, useContext} from 'react';

const MyContext = createContext('defaultValue');

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
    return (
    <MyContext.Provider value="GOOD"> {/**MyContext.Provider를 통해서 value값을 설정을 하면 createContext값이 value값으로 변환 */}
        <GrandParent />
    </MyContext.Provider>
    )
}

export default ContextSample;