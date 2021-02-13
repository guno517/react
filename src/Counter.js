import React,{useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0); {/*number라는 상태를 만들건데 기본값은 0이다 / setNumber는 0인 상태를 바꿔주는 함수 
    const numberState = useState(0)
    const number = numberState[0]
    const setNumber = numberState[1] 이 배열 비구조할당을 통해 위의 한줄로 변경*/}
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); {/**함수형 업데이트 /최적화 */}
    }
    const onDecrease = () => {
        setNumber(number-1)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button> {/*onClick={onIncrease()} 라고 넣으면 함수를 호출하는게 되어 렌더링될 때마다 함수가 호출된다. */}
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;