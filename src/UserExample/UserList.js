import React from 'react';

const User = ({ user, onRemove }) => {
  return (
    <div>
      <span>
        {user.username} / {user.email}
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </span>
    </div>
  );
};

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} onRemove={onRemove} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
