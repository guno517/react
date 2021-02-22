import React, { useState, useRef } from 'react';
import UserList from './UserExample/UserList';
import CreateUser from './UserExample/CreateUser';

function Hello() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'guno',
      email: 'guno@gmail.com',
    },
    {
      id: 2,
      username: 'test',
      email: 'test@gmail.com',
    },
    {
      id: 3,
      username: 'coffee',
      email: 'coffee@gmail.com',
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => id !== user.id));
    console.log(id);
  };
  return (
    <div>
      <div>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
      </div>
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
}
export default Hello;
