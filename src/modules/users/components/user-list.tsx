import React, {FC, useState} from 'react';
import {User} from "../user-types";

export const UserList: FC = () => {

    const [users, setUsers] = useState<User[]>([])

    const addUser = (firstName: String, lastName: String) => {
        const userToAdd : User = {
            userName: {
                firstName: firstName,
                lastName: lastName
            },
            id: users.length
        };

        setUsers(users.concat([userToAdd]));
    }

    return (
        <>
            <button onClick={() => addUser('Arya', 'Stark')}>Add No One</button>
            <button onClick={() => addUser('Daenerys', 'Targaryen')}>Add Mother of Dragons</button>
            {users.length > 0 ? users.map(user =>
                <li>{user.userName.firstName} {user.userName.lastName}</li>) :
                <div>No Users</div>
            }
        </>
    )
}