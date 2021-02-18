import React,{useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter(){
    
    const [number, dispatch] = useReducer(reducer, 0); //dispatch : 보내다, 액션을 발생시킨다.

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT',
        })
    }
    const onDecrease = () => {
        dispatch({
            type:'DECREMENT',
        })
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button> {/*onClick={onIncrease()} 라고 넣으면 함수를 호출하는게 되어 렌더링될 때마다 함수가 호출된다.*/}
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;