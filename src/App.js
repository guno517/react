import React, {useState, useRef, useMemo} from 'react';
import './App.css';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import UserList from './UserList'
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active === true).length;
}
function App() {  
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })

  const {username, email} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users,setUsers] = useState([
    {
        id:1,
        username: 'guno',
        email: 'guno@google.com',
        active:true
    },
    {
        id:2,
        username: 'test',
        email: 'test@google.com',
        active:false
    },
    {
        id:3,
        username: 'bgo',
        email: 'bgo@google.com',
        active:false
    },
  ]);
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers([...users, user]) //기존의 배열을 복사하고 새로운 배열을 만들고 user을 넣는다
    //setUsers(users.concat(user));
    //user.push(user) 는 업데이트가 되지 않는다. XXXXX
    setInputs({
      username:'',
      email:'',
    });
    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); //id를 비교한다
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id ===id //user을 파라미터로 가져온다
        ? {...user, active: !user.active }
        : user
    ));
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
    <Counter />
    <hr />
    <InputSample />
    <hr />
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </>
    </>
  );
}

export default App;
