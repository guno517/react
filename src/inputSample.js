import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onReset = () => {
        setText('');
    };
    return (
        <div>
            <input onChange={onChange} value={text}/> {/**value={text}가 중요 / 이 값이 없으면 setText에 값이 전달이 안돼 초기화,출력이 안된다. */}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                    {text}
            </div>
        </div>
    );
}

export default InputSample;