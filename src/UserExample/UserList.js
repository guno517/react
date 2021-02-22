import React from 'react';

const User = ({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;
  return (
    <div>
      <span>
        <b
          style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer',
          }}
          onClick={() => onToggle(id)}
        >
          {username}
        </b>{' '}
        / {email}
        <button onClick={() => onRemove(id)}>삭제</button>
      </span>
    </div>
  );
};

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default UserList;
