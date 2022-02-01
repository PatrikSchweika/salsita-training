import React, {FC} from 'react';
import {AddUser, User} from "../user-types";

interface UserListProps {
    users: User[];
    addUser: AddUser;
}

export const UserList: FC<UserListProps> = ({users, addUser}) => (
    <>
        <button onClick={() => addUser({firstName: 'Arya', lastName: 'Stark'})}>Add No One</button>
        <button onClick={() => addUser({firstName: 'Daenerys', lastName: 'Targaryen'})}>Add Mother of Dragons</button>
        {users.length > 0 ? users.map(user =>
            <li>{user.firstName} {user.lastName}</li>) :
            <div>No Users</div>
        }
    </>
)