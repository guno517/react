import React from 'react';

function CreateExample({name,email,onChange,onCreate}){
    return (
        <div>
            <input name="name" placeholder="name" onChange={onChange} value={name}/>
            <input name="email" placeholder="email" onChange={onChange} value={email}/>
            <button onClick={onCreate}>추가</button>
        </div>
    );
}

export default CreateExample;