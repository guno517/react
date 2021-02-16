import React from 'react';

function User({user, onRemove, onToggle}){
    const {name, email, id} = user;
    return (
        <div>
        <b const style = {{
            cursor: 'pointer',
            color: user.active ? 'green' : 'black'
        }}
            onClick={() => onToggle(id)}
        >
            {name} </b>/ {email} <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function ListExample({users, onRemove, onToggle}){
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default ListExample;