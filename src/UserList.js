import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user; // {user.username}, {user.email}, {user.id}를 <div>내에서 쓰기 귀찮다면
    useEffect(() => {

    });
        
    return(
        <div>
            <b style={{
                color: active? 'green': 'black',
                cursor: 'pointer'
            }} 
                onClick={() => onToggle(id)}
            >
            {username}</b> <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>  
            {/**함수를 호출하는게 아니라 새로 만들어 넣어야한다. ()=>없이 onClick={onRemove(id)}만 있으면 렌더링 될때마다 값이 삭제되어있다. */}
            {/**버튼을 클릭하면 이러한 함수를 호출할 것이다 id값을 파라미터로 넣어서 호출할것이다 */}
            {/**값을 받아 값에 해당하는 데이터를 지워야하기 때문에 파라미터를 받기 위해 새로운 익명 함수를 호출 */}
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(
                    user => (
                    <User 
                        user={user}
                        key={user.id} //key가 없으면 웹의 효율성이 떨어진다. 모든 정보가 다시 업데이트된다(?)
                        // 새로운 항목이 추가되거나 삭제될 때, 효율적으로 관리할 수 있다.
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />) 
                )
            }
        </div>
    );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);