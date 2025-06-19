import React from 'react';

interface Props {
    users: string[];
}


const UserList: React.FC<Props> = ({users}) => {
    return (
        <div style={{ padding: '12px'}}>
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;