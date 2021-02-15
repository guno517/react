import React, { useState } from 'react';

function Inputexample() {
    const [inputs, setInput] = useState({
        name:'',
        nickname:'',
    });
    const {name, nickname} = inputs;
    const onChange = (e) =>{
        const {name, value} = e.target;
        const nextInputs = {
            ...inputs,
            [name]: value,
        }

        setInput(nextInputs);

    }

    const onReset = () => {
        console.log('초기화');
        setInput({
            name:'',
            nickname:''
        });

    }
    return (
        <>
            <div>
                <input name="name" placeholder="name" onChange={onChange} value={name}/>
                <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname}/>
                <button onClick={onReset}>초기화</button>
            </div>
            <div>
                <b>값: </b>
                    {name} ({nickname}) 
            </div>
        </>
    );
}

export default Inputexample;