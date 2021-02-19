import React, { useReducer , useRef, useMemo, useCallback, createContext} from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active === true).length;
}

const initialState = {
  users:[
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
  ]
}

function reducer(state, action){
  switch(action.type){
      case 'CREATE_USER':
        return {
          inputs: initialState.inputs,
          users: state.users.concat(action.user)          
        };
      case 'TOGGLE_USER':
        return {
          ...state,
          users: state.users.map(user => 
              user.id === action.id ? {...user, active: !user.active} : user
          )
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        }
      default:
      throw new Error('Unhandled');
  }
}

export const UserDispatch = createContext(null);

function App() {  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state; 

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users}/>
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
