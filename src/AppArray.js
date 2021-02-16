import React, { useRef, useState } from 'react';
import CreateExample from './CreateExample';
import ListExample from './ListExample';

function AppArray(){
    const [inputs, setInputs] = useState({
        name:'',
        email:'',
    })

    const {name, email} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const [users,setUsers] = useState([
        {
            id: 1,
            name: 'guno',
            email: 'guno@naver.com',
            active: true
        },
        {
            id: 2,
            name: 'byun',
            email: 'hyun@naver.com',
            active: false,
        },
        {
            id: 3,
            name: 'bgo517',
            email: 'bgo517@naver.com',
            active: false
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () =>{
        const user = {
            id: nextId.current,
            name: name,
            email,
        }
        setUsers([...users, user]);
        setInputs({
            name:'',
            email:'',
        });
        nextId.current += 1;
        console.log(nextId);
    }

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id))
        console.log(id);
    }

    const onToggle = (id) => {
        setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user));
    }

    return (
        <>
            <CreateExample 
                name={name}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <ListExample users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
}

export default AppArray;